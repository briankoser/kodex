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

## Links
- [Years of Reading](/books/brian/years)
- [Gift Suggestions](/books/brian/gift-suggestions)