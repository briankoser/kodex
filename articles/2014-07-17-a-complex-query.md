title: A Complex Query
description: 
published: 2014-07-17
authors:
  - Brian
tags: 
  - programming

# can we generate?
date_id: 1
excerpt: I’ve written a lot of SQL, but most of it tends to be pretty simple. Even most of the large queries that I’ve written aren’t complex, they just have a lot of tables and columns to deal with. Probably the most complicated and interesting query I’ve written.
url: article/2014/07/17/1/a-complex-query
---
I’ve written a lot of SQL, but most of it tends to be pretty simple. Even most of the large queries that I’ve written aren’t complex, they just have a lot of tables and columns to deal with. Probably the most complicated and interesting query I’ve written calculates dates based on a hierarchy of date offsets.

<script src="https://gist.github.com/ca097b7775b95f130a40.js?file=Query-Blog.sql"> </script>

Recursion, a cross join, a full outer join…there’s a lot of interesting pieces here. Let’s break it down:

<pre><code class="language-sql">SELECT eventname, displayname, offsetid, parentoffsetid,         EXTRACT(YEAR FROM SYSDATE) + column_value - 2 /*Gets last, this, and next year*/AS eventyear    FROM eventdateoffsets   CROSS     JOIN table(integers(3))   WHERE parentoffsetid IS NULL  </code></pre>    

`integers` is an alias for a simple function that returns a pipelined array of numbers from 1 up to the parameter provided:

<script src="https://gist.github.com/ca097b7775b95f130a40.js?file=integers.sql"> </script>

So `integers(3)` returns an array containing 1, 2, 3. `table` is an alias for a function that converts the array to an Oracle table, which allows us to join to it. A cross join (aka Cartesian join) matches every row in table A with every row in table B, so no join conditions are necessary.

`eventdateoffsets` is the table holding all the event information:

<table>      <thead>          <tr>              <th>eventdateoffsets</th>              <th> </th>          </tr>      </thead>      <tbody>          <tr>              <td>offsetid</td>              <td>Number (PK)</td>          </tr>          <tr>              <td>eventname</td>              <td>Varchar2</td>          </tr>          <tr>              <td>parentoffsetid</td>              <td>Number</td>          </tr>          <tr>              <td>eventoffset</td>              <td>Interval</td>          </tr>      </tbody>  </table>    

The parentoffsetid is the offsetid of the date that this date is based on. The eventoffset is how much before or after the parent date that the event takes place. This allows us to set up relations from our business rules like “registration always takes place two days after Labor Day” or “students can cancel courses until one week after classes begin”. The data looks something like this:

<table>      <thead>          <tr>              <th>offsetid</th>              <th>eventname</th>              <th>parentoffsetid</th>              <th>eventoffset</th>          </tr>      </thead>      <tbody>          <tr>              <td>1</td>              <td>Labor Day</td>              <td>null</td>              <td>null</td>          </tr>          <tr>              <td>2</td>              <td>Registration Begins</td>              <td>1</td>              <td>+ 00 08:00</td>          </tr>          <tr>              <td>3</td>              <td>Registration Ends</td>              <td>2</td>              <td>+ 03 14:00</td>          </tr>      </tbody>  </table>

Here registration begins at 8 <abbr>am</abbr> on Labor Day and ends three days later at 10 <abbr>pm</abbr>. Notice that Labor Day doesn’t have a parent; that will be important later.

Back to the query:

<pre><code class="language-sql">SELECT eventname, displayname, offsetid, parentoffsetid,         EXTRACT(YEAR FROM SYSDATE) + column_value - 2 /*Gets last, this, and next year*/AS eventyear    FROM eventdateoffsets   CROSS     JOIN table(integers(3))   WHERE parentoffsetid IS NULL  </code></pre>

`EXTRACT(YEAR FROM SYSDATE) + column_value - 2` gets the current year (as of this writing, 2014) and adds the value from the integers table (1, 2, 3) and subtracts 2. In effect, this adds -1, 0, and 1 to the current year, giving us last year, this year, and next year (as of this writing 2013, 2014, and 2015).

`WHERE parentoffsetid IS NULL`: remember in our example how Labor Day didn’t have a parent? This query is getting all the dates without a parent; I call them “source dates”. These are our foundation. Some are holidays like Labor Day and Thanksgiving. Others are dates determined by Business Rules which haven’t been integrated into this system. This part of the query gets all the source dates with an `eventyear` of last year, this year, and next year. Let’s go one level higher:

<pre><code class="language-sql">SELECT eventname, displayname, offsetid, parentoffsetid, eventyear,        (SELECT api.GetSourceDate(eventname, eventyear) FROM dual) AS eventdate,        (SELECT api.GetSourceAcademicYear(eventname, eventyear) FROM dual) AS academicyear  FROM (SELECT eventname, displayname, offsetid, parentoffsetid,               EXTRACT(YEAR FROM SYSDATE) + column_value - 2 /*Gets last, this, and next year*/AS eventyear          FROM eventdateoffsets         CROSS           JOIN table(integers(3))         WHERE parentoffsetid IS NULL       )  </code></pre>

`api.GetSourceDate()` calculates the date for a source date for a given year. It basically is a giant `CASE` that looks something like:

<script src="https://gist.github.com/ca097b7775b95f130a40.js?file=GetSourceDate.sql"> </script>

<p>`api.GetSourceAcademicYear()` calculates the academic year (which starts in September when the fall semester begins) for the event.

Now that the parent dates are set, we can determine the child dates. Since child dates can be parents for further dates, we need to calculate the hierarchy recursively:

<pre><code class="language-sql">SELECT eventname, displayname, offsetid, parentoffsetid, eventyear,        (SELECT api.GetSourceDate(eventname, eventyear) FROM dual) AS eventdate  FROM (SELECT eventname, displayname, offsetid, parentoffsetid,               EXTRACT(YEAR FROM SYSDATE) + column_value - 2 /*Gets last, this, and next year*/AS eventyear          FROM eventdateoffsets         CROSS           JOIN table(integers(3))         WHERE parentoffsetid IS NULL       )  UNION ALL  SELECT childdates.eventname, childdates.displayname, childdates.offsetid,        childdates.parentoffsetid, eventyear,        (SELECT api.GetEventDate(eventdatesrecursive.eventdate, childdates.offsetid, childdates.eventoffset, eventyear) FROM dual) AS eventdate  FROM eventdateoffsets childdates  JOIN eventdatesrecursive    ON childdates.parentoffsetid = eventdatesrecursive.offsetid  </code></pre>

This the the <abbr>ANSI</abbr>-standard way of doing recursion. You have a query to calculate your starting data, which is then <code>UNION</code>ed to your dependent data.

The `GetEventDate` function basically adds the child date’s offset interval to the parent date’s date to get the child date’s date. It also takes Leap Year into account for dates that are set up to be run on a certain day every year (e.g. Independence Day is always July 4).

<script src="https://gist.github.com/ca097b7775b95f130a40.js?file=GetEventDate.sql"> </script>

With the recursion tucked out of the way in a `WITH`, the rest of the query is easy.

<pre><code class="language-sql">SELECT nvl(overrides.eventname, offsets.eventname) AS eventname, offsets.displayname,          nvl(overrides.eventdate, offsets.eventdate) AS eventdate    FROM eventdatesrecursive offsets    FULL OUTER    JOIN eventdateoverrides overrides      ON offsets.eventname = overrides.eventname     AND offsets.academicyear = overrides.academicyear;  </code></pre>

There is an overrides table which allows any calculated date to be overwritten by entering a row into the table. I’m doing a `FULL OUTER JOIN` so that the override will create an event even if it isn’t set up in `eventoffsets`.

Phwew! And this is actually a simplified version of the query because there were some business rules I didn’t want to get into, just because I wanted to focus more on the <abbr>SQL</abbr>. Really though, when you break it down, there aren’t any concepts that are too advanced. The difficulty comes in understanding the query as a whole.