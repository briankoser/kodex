---
layout: books
title: Brian's Books · Favorites
permalink: /books/brian/favorites/index.html
---

<div class="bookgrid">
{% for book in goodreadsBrianFavorites -%}
    {% goodreadsbook book %}
{%- endfor %}
</div>