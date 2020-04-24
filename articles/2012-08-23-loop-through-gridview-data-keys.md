---
layout: article
title: Loop through Gridview data keys  
description: ASP.NET WebForms Gridview discussion
published: 2012-08-23  
authors: 
  - Brian
tags:
  - programming

date_id: 1  
url: article/2012/08/23/1/loop-through-gridview-data-keys  
excerpt: Today I was adding an “Export to Excel” option to a Gridview. I wanted to mark each exported record in the database, but it wasn’t immediately apparent how I would do so.  
---
Today I was adding an “Export to Excel” option to a Gridview. I wanted to mark each exported record in the database, but it wasn’t immediately apparent how I would do so. After far more searching than I expected, I came up with the following solution:

<script src="https://gist.github.com/8260040.js"> </script>

I was thinking I would need LINQ and casting and such…and it turns out you can just loop through a Gridview’s data keys.