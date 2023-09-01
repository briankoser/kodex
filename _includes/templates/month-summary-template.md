---
layout: article
title: {month year} Summary
description: Summary of what Brian read, thought, and did in {month year}
published: 
authors:
  - Brian
tags:
  - month-summary
---

## Personal
- 

## News
- 

## My Thoughts
- 

## Writing, Links, Podcasts

<div class="stack cards">
{% for item in collections.all | byDate("2022-03", "yyyy-MM") -%}
  {% if item.data.cardType == 'article' %}
  {% articlecard item %}
  {% elif item.cardType == 'feedbin' %}
  {% feedbincard item %}
  {% elif item.cardType == 'note' %}
  {% notecard item %}{{ item.templateContent | safe }}{% endnotecard %}
  {% elif item.cardType == 'podcast' %}
  {% podcastcard item %}
  {% else %}
  {{ item.data.cardType or 'none' }}
  {% endif %}
{%- endfor %}
</div>

## Notes
- 

## Quotes
- 

## Words
- 