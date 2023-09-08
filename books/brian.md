---
layout: books
title: Brian's Books
permalink: /books/brian/index.html
---

## Currently Reading
<div class="bookshelf">
{% for book in goodreadsBrianCurrentlyReading -%}
    {% goodreadsbook book %}
{%- endfor %}
</div>