---
layout: article
title: February 2022 Summary
description: What Brian read, thought, and did in February 2022
published: 2022-03-01
authors:
  - Brian
tags:
  - month-summary
---

## Personal
- I'm all in on Bullet Journaling. Still exporting from Google Calendar, Trello, and Bear notes.
- Taught Lydia the rules of chess.
- First hike with Suzy. All six of us went up and down Rainbow Mountain for a couple hours.
- Continued juggling. Already met 2022 goal by juggling 3 balls for 1 min 6 sec.

## News
- Tom Brady retired
- Washington Commanders lol
- Simmons, Curry, Drummond for Harden
- Russia attacked Ukraine

## Words and Phrases
- Preposterous: with the hinder part before (Latin)
- Much of a muchness: similar (British)
- Snickersnee: large knife
- Solemn: marked with religious rites and pomps

## Ideas
- Determine which environment to deploy to with a pachinko machine.
- SSA: It's Ass Backwards™
- How is a key like a thundercloud? They both shoot bolts.

## Notes
- The two major fairy tale plot structures (separation and reunion of husband/wife or parent/child) are present in the Gospel: the Father is reunited with His children, the Bride is reunited with Christ. (Literary Life podcast)
- Medievals didn't become Greek or Roman, they synthesized and expanded. (Online Great Books podcast #148)
- Constraints are enabling: cars, art, marriage.
- Documentaries and textbooks are secondary sources. (Scholé Sisters podcast)
- Language has historically been and should be the center of education, not history. (Angelina Stanford)
- History is not beautiful. Language is beautiful. (Stanford)
- Myths, fables, fairy tales, Bible stories are the gateway to the Great Books. (Stanford)
- Classics say society is man writ large. Moderns say man is society writ small. (New Humanists podcast #8)
- If we are just cause and effect machines, reason is an illusion. (New Humanists #8)
- Plutarch and Herodotus made some distinction between myth and reality (e.g. Plutarch wrote there was no proof Lycurgus existed)
- Hammurabi's and Draco's law codes prescribed death for every crime. The Mosaic Law was more lenient toward petty crimes.

## Writing, Links, Podcasts

<div class="stack cards">
{% for item in collections.all | byDate("2022-02", "yyyy-MM") -%}
  {% if item.data.cardType == 'article' %}
  {% articlecard item %}
  {% elif item.cardType == 'bookreview' %}
  {% bookreviewcard item %}
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