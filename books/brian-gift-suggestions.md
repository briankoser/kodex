---
layout: books
title: Brian's Books · Gift Suggestions
permalink: /books/brian/gifts/index.html
---

Randomly selected from [my "to read" list](https://www.goodreads.com/review/list/4812558-brian-koser?ref=nav_mybooks&shelf=to-read)

<div class="bookgrid">
{% for book in goodreadsBrianGiftSuggestions -%}
    {% goodreadsbook book %}
{%- endfor %}
</div>