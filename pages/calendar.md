---
layout: page
title: Calendar
description: Koser's calendar
permalink: /calendar/index.html
---
<div class="stack calendar">
{% for day in calendar.currentYear | sort(attribute="date") -%}
    {% calendarDay day %}
{%- endfor %}
</div>