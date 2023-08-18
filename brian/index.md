---
layout: page
title: Brian
permalink: /brian/index.html
---
Christian. Husband. Father. Reader. Writer. Programmer. Podcaster. **Brian** jug­gles many hats. When he’s not mix­ing metaphors, you might find him making lists, exploiting the power of three, or writ­ing in the third per­son.

## Currently Reading
<div class="bookshelf">
{% for book in goodreadsBrianCurrentlyReading -%}
    {% goodreadsbook book %}
{%- endfor %}
</div>