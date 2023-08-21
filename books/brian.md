---
layout: page
title: Brian's Books
permalink: /books/brian/index.html
---

## Currently Reading
<div class="bookshelf">
{% for book in goodreadsBrianCurrentlyReading -%}
    {% goodreadsbook book %}
{%- endfor %}
</div>

## Favorites
<div class="bookshelf">
{% for book in goodreadsBrianFavorites -%}
    {% goodreadsbook book %}
{%- endfor %}
</div>

## Gift Suggestions
Randomly selected from [my "to read" list](https://www.goodreads.com/review/list/4812558-brian-koser?ref=nav_mybooks&shelf=to-read)
<div class="bookshelf">
{% for book in goodreadsBrianGiftSuggestions -%}
    {% goodreadsbook book %}
{%- endfor %}
</div>