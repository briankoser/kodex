---
layout: article
title: Oracle Numbers to English
description: Brian lists the hacks to convert Oracle numbers to their English equivalents.
published: 2013-10-16
authors:
  - Brian
tags:
  - programming
excerpt: Oracle has built-in methods for a lot of things.
---

Oracle has built-in methods for a lot of things. Converting from Arabic to Roman numerals? [Check](http://docs.oracle.com/cd/E16655_01/server.121/e17209/sql_elements004.htm#r15c1-t61). Generating a byte string containing all valid 1-byte encodings between two given bytes? [Sure](http://docs.oracle.com/cd/E16655_01/appdev.121/e17602/u_raw.htm#ARPLS71430). Generating ASCII-art llamas from the statistics gathered on crossedition triggers? Well, maybe in 13c.

You can also spell numbers out in English, although I’m not sure if that was an intended use of the functions we’ll be using today. Nevertheless.

The magic that makes it all happen is the [Julian date](http://en.wikipedia.org/wiki/Julian_calendar).

```sql
SELECT to_char(to_date(4321, 'J'), 'J') 
  FROM dual; 
-- result: 0004321
```

This code converts the number to a Julian date (format specifier “J”) then to a string representing the Julian date, which is the number again.

Why convert the number to a date before converting to a string? Well, `to_char(string, format)` doesn’t accept the format specifiers we’ll need to use; the date version, `to_char(date, format)`, does accept those specifiers, so we first convert to a date before converting to string. And in this case Julian dates are easier to work with because they are stored as a number of days since January 1, 4712 <abbr>BC</abbr>. This allows us to easily go from number to date to string, as you saw above.

Caveat: for a number to be converted to a Julian date it will need to be between 1 and 5,373,484 (the highest valid number will have increased by the time you read this). The highest valid number is the number of days since January 1, 4712 <abbr>BC</abbr>. If you need to handle 0, negatives, decimals, or numbers larger than about 5 million, you’ll need to write additional code.

Once we have our date, we’ll convert it to the string we want:

## Spelled Out  

```sql
SELECT to_char(to_date(4321, 'J'), 'Jsp') 
  FROM dual;
-- result: Four Thousand Three Hundred Twenty-One
```
The format specifier, “Jsp”, can be broken down into two parts:

- “J” gives us a Julian date
- “sp” (short for “spelling”) converts the number to English

You can also use “JSP” (gives you the string in all caps) and “jsp” (gives you the string in all lower case).

## Ordinal

```sql
SELECT to_char(to_date(4321, 'J'), 'fmJth') 
  FROM dual;
-- result: 4321st
```

- “fm” removes leading zeroes
- “J” gives us a Julian date
- “th” adds the ordinal suffix, so we can get 1st, 2nd, 8th, etc.
  - I assume that “th” is used because most ordinals end in “th”.

## Spelled-Out Ordinals

```sql
SELECT to_char(to_date(4321, 'J'), 'JspTH') 
  FROM dual; 
-- Result: Four Thousand Three Hundred Twenty-First
```
And if we combine the two, we get spelled-out ordinals.

So get out there and spell some numbers. I’m sure you’re excited to take advantage of your new-found knowledge; if you can’t think of a use for this code, why not add the below to a report?

```sql
SELECT CASE 
       WHEN trunc(SYSDATE) = to_date('04-01', 'MM-DD') THEN 
         to_char(to_date(reportcount, 'J'), 'Jsp') 
       ELSE reportcount 
       END AS reportcount 
  FROM ...
```