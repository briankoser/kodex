---
layout: article
title: August 2022 Summary
description: Summary of what Brian read, thought, and did in August 2022
published: 2022-08-31
authors:
  - Brian
tags:
  - month-summary
---

## Personal
- Started meeting the neighbors.
- Attended first Lit Life reading and All Fellows Eve.
- Re-learned how to solve a Rubik's cube.
- Started the class [How to Read Literature](https://houseofhumaneletters.com/how-to-read/) with House of Human Letters.
- Dreamed the Phillies won the World Series. The victory highlight (a la McGraw leaping and Lidge falling to his knees) is a player sitting on home plate, slapping the ground with alternating hands.
- Installed light fixture in study. That level of electrical work I can handle, apparently.

## My Thoughts
- I'd rather tilt at windmills than not believe in giants.

## Writing, Links, Podcasts

<div class="stack cards">
{% for item in collections.all | byDate("2022-08", "yyyy-MM") -%}
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
- Andrew Kern
  - Dewey wanted to progress education: education for all, fit for a modern world, allowing children to put emotion into words.
  - Americans have always been nomads.
  - Augustine: music is the science of modulation. We need to constantly modulate between conserving and progressing.
  - Every person is holy. Every person bears the image of God and reflects His beauty. Be noble and don't abuse others even in your mind.
- Karen Glass
  - Reason provides "logical demonstration of mathematical truths" and "logical reasons for ideas which we have already chosen to accept."
  - Increase frequency before increasing length of written narrations.
  - Charlotte Mason: if you can't tell, you don't know
- Thomas Banks
  - Boethius and Pope Gregory have both been called "the last ancient Roman"
  - Maximianus, the last pagan Roman writer, was friends with Boethius
  - The scraps of Aristotle that survived in Europe were Boethius's translations
- Doug Wilson: 
  - Seraphim are dragons. Nehushtan was called a seraph; snake + wings = dragon. Satan probably a fallen seraph.
  - Cherubim: winged bulls
- James White: Some Thomists are defining God's simplicity as His attributes being identical ad intra (to God there is no difference between justice and love) instead of indivisible and harmonious attributes. Also say every action of God is taken by all three Persons.
- Joffre Swait: education is immeasurable but observable
- Monarch and viceroy butterflies are both inedible, protecting each other (Mullerian mimicry instead of Batesian).
- Good trees to plant near a house: Japanese maple, Cornelian cherry dogwood, crabapple
- Guerilla gardening is planting flowers on public or abandoned land.

## Quotes
- "To humble a boy, put him in the presence of something greater than himself." -- Christopher Perrin
- "Pants are not biblical." -- Thomas Banks
- "It is at her [the Church's] centre, where her truest children dwell, that each communion is really closest to every other in spirit, if not in doctrine." -- C. S. Lewis, *Mere Christianity*

## Words
- Lambaste: beat severely