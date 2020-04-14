title: Number or String?
description: Brian litss the times you should store a digit as a string
published: 2016-06-25
authors:
  - Brian
tags: programming

# can we generate?
date_id: 1
excerpt: If a value contains only numeric digits, when should you store it as a number in the database, and when as a string?
url: article/2016/06/25/1/number-or-string
---
If a value contains only numeric digits, when should you store it as a number in the database, and when as a string?

<figure>  <img alt="Flowchart for when to store value as number or string in the database." src="https://s3.amazonaws.com/cdn.koser.us/img/journal/2016-06-25-number-vs-string.png" />  </figure>  

- Phone numbers, US ZIP codes, and credit card numbers can start with a zero: store them as strings.
- Product prices can be added (multiple products), subtracted and divided (coupons): store them as numbers.
- Store as number any sortable report column values. Otherwise you’ll get “1, 10, 2” instead of “1, 2, 10”.
- This one is debatable: if you are storing e.g. a US ZIP code, and you are validating that it only contains numeric digits, should you store it as a number even though you don’t need arithmetic done? I would probably still store it as a string, but I wouldn’t argue if you make it a number.