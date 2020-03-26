title: Preventing Duplicate Selections with C# and jQuery Validation
description: Brian works through a simple validation problem.
published: 2013-09-05
authors:
  - Brian

# optional
tags: 
series: 
header_image: temp.jpg # CDN is understood
last_updated: 2014-05-21T18:00:00
is_draft: true # defaults to false

# can we generate?
date_id: 1
excerpt: A few days ago, while working on a web page, I got to write my favorite type of code: validation. Ha ha. Actually I’d rather floss with a brick than write validation.
slug: preventing-duplicate-selections-with-c-and-jquery-validation
url: article/2013/09/05/1/preventing-duplicate-selections-with-c-and-jquery-validation
---
A few days ago, while working on a web page, I got to write my favorite type of code: validation.

<figure>      <img src="http://cdn.koser.us/img/journal/2013-09-05-validation.png" alt="jQuery validation" />  </figure>

Ha ha. Actually I’d rather floss with a brick than write validation.

Anyway, I was writing validation for an ASP.NET/C# registration page. The page has three dropdown lists, each with the same list of courses. Students can register for up to three courses by choosing a course in each dropdown list. The validation I was writing needed to prevent a student from registering for a course multiple times. It seemed like there should be a simple solution, but it wasn’t jumping out at me, so I started to pseudocode a naive solution.

<script src="https://gist.github.com/8260138.js?file=PreventingDuplicates1.txt"> </script>    

Okay, not very elegant. And not easily scalable <del>if</del> when I’m asked to add a fourth dropdown. I started coding it out a little more in the hopes of seeing a pattern.

<script src="https://gist.github.com/8260138.js?file=PreventingDuplicates2.txt"> </script>    

Then I had a “eureka” moment: I could put the values in an array, get the count of unique items, and check if the number of values is equal to the number of unique values.

<script src="https://gist.github.com/8260138.js?file=PreventingDuplicates1.cs"> </script>    

This works because I don’t care how many duplicates there are, or which values are duplicated. I just want to know if duplicates exist.

However, it’s not quite complete. If a student registers for only one course, say “History 101”, dropdown list 1 will have the value “HI 101” and dropdowns 2 and 3 will be empty strings. Since <code>"" == ""</code>, I’ll need to allow multiple empty strings.

<script src="https://gist.github.com/8260138.js?file=PreventingDuplicates2.cs"> </script>    

Boom. And in jQuery:

<script src="https://gist.github.com/8260138.js?file=PreventingDuplicates.js"> </script>    

I still don’t like writing validation, but…it has its interesting moments.