---
layout: base
title: Brian's Films
permalink: /films/brian/index.html
---

## Films Recently Watched
<div class="filmshelf">
{% for film in letterboxdBrianRecentlyWatched -%}
    {% letterboxdfilm film %}
{%- endfor %}
</div>