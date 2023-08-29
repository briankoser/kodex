---
layout: page
title: Brian's Book Gift Suggestions
permalink: /books/brian/gift-suggestions/index.html
---

Randomly selected from [my "to read" list](https://www.goodreads.com/review/list/4812558-brian-koser?ref=nav_mybooks&shelf=to-read)

<div class="bookshelf">
{% for book in goodreadsBrianGiftSuggestions -%}
    {% goodreadsbook book %}
{%- endfor %}
</div>