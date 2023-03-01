---
layout: article
title: February 2023 Summary
description: Summary of what Brian read, thought, and did in February 2023
published: 2023-02-28
authors:
  - Brian
tags:
  - month-summary
---

## Personal
- Drove with Lydia and Amber to Louisiana to watch the Super Bowl with my parents and brothers.
- Visited the US Space and Rocket Center with Tim.
- Finished the House of Humane Letters class [How to Read Fairy Tales](https://houseofhumaneletters.com/product/how-to-read-fairy-tales/).
- Started the Couch to 5K program.

## My Thoughts
- Roman Catholics criticize Protestants for simplistically arriving at solid doctrinal positions, where the Roman church allows a range of opinions by only defining boundaries through negative theology. They also criticize Protestants lack of a centralized authority, which prevents them from from arriving at solid doctrinal positions.
- People like Peter Enns criticize Iron Age man for their primitive theology. From early scripture, they thought of God as a person (walking in the Garden with Adam, eating with Abraham). Later men developed the idea of God as a superman (like the Greek pantheon). The Greek philosophers reasoned that God was transcendant, the first cause of the cosmos. And when mankind had advanced and figured all that out, God became a man. Truly one of God's best jokes.
- The irony of saying "I don't believe in Christianity because it's just a bunch of rules", but then making science your highest belief system, which is just a bunch of rules.

## News
- Eagles lost the Super Bowl
- Tom Brady retired again

## Writing, Links, Podcasts

<div class="stack cards">
{% for item in collections.all | byDate("2023-02", "yyyy-MM") -%}
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

## Notes
- Wes Callihan: CS Lewis called himself the "last of the dinosaurs". Dorothy Sayers, GK Chesterton, Hilaire Belloc, Charles Williams, George MacDonald, and Edmund Burke were his fellow "last dinosaurs".
- Charles Haywood:
  - Today's American liberals get meaning from politics. Conservatives get meaning from regular life, like family, religion, and making things.
  - Computer skills are important because computers aren't going away.
- Angelina Stanford:
  - CS Lewis wrote that characters exist for the story, not vice versa. He cited three authors to support that view: Aristotle (in Poetics), Bocaccio (medieval tradition), and Jung (whose archetype theory was further developed by Northrop Frye.)
  - True art reflects truth. Not what we want, but what is.
- Jonathan Pageau:
  - Stories are events condensed into pattern. Even when telling a "factual historical account" we choose which facts to include and assemble into a narrative. The creation story is heavily compressed.
  - Bibles with footnotes like "this passage is found in X manuscripts" are missing the point.

## Quotes
- "It is in Apple's DNA that technology alone is not enough--it's technology married with liberal arts, married with the humanities, that yields us the results that make our hear sing." --Steve Jobs

## Words
- Brick: a generous, helpful, reliable person