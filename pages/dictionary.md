---
layout: page
title: Dictionary
description: Brian's dictionary
permalink: /dictionary/index.html
---
<div class="stack dictionary">
{% for word in dictionary.words | sort(attribute="word") -%}
    {% dictionaryEntry word %}
{%- endfor %}
</div>