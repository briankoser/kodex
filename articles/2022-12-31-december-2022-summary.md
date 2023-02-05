---
layout: article
title: December 2022 Summary
description: Summary of what Brian read, thought, and did in December 2022
published: 2022-12-31
authors:
  - Brian
tags:
  - month-summary
---

## Personal
- Amber got very embarrassed every time I sang, "This Christmas, baloo-bitty-boo" to the tune of the "Last Christmas" chorus.
- Gave my testimony to the deacons.
- Dinner with Terry and Dante, the caroled after.
- Tijerinas visited for Christmas. The Space and Rocket Center were closed, so instead we went to Animal Trax, the exotic pet store.
- Adopted a kitten: Arabella
- Hosted a board game day on New Year's Eve.

## My Thoughts
- Do Roman Catholics believe we can only know objective truth through the pope, councils, the magisterium? If so, how can we make objective statements about those items on which the Church has not spoken? (How can you say *Hamlet* is objectively better than *Twilight* without an authority?)
- What are your hidden defaults? You have a choice in many areas of life that you never consider the options. You don't have to buy the cheapest option. You don't have to send your children to government school. You don't have to buy your child a smartphone.

## Writing, Links, Podcasts

<div class="stack cards">
{% for item in collections.all | byDate("2022-12", "yyyy-MM") -%}
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
- Ben De Bono
  - If your choice is between two bad options, there's a third option you haven't yet considered.
  - If you can get off prescription drugs, you should.
- C. S. Lewis, Learning in War-Time
  - Why study literature during World War 2? But humanity is never at peace. And spiritual warfare is constant.
  - Christians do the same actions as non-Christians, but to the glory of God.
- Joffre Swait
  - Hold life lightly. Don't dwell overlong on tragedy or peril.
- Everlasting Education podcast Ep. 20
  - Classical education is not a curriculum, formula, series of steps or stages. It is a pedagogy and a pool of knowledge.
  - Trivium is methods applied to each subject (BK: is that historically classical?)
  - Make students self-motivated to learn
  - Mastery before creativity
  - Study the whole, and the connections between parts of the whole.
- Online Great Books podcast Ep. 159 Filling the Trough
  - Behaviorism: (BF Skinner) Carrot and stick, measured goals, students are blank slates for teacher to write on. Done when the correct behavior is reached. Most common in modern schools.
  - Cognitivism: observing cause and effect in nature or the lab. Making meaning. Participating in learning.
  - Constructivism: create meaning as a group, teacher is a "guide on the side" instead of a "sage on the stage". Taken too far, leads to subjectivism.
- The Literary Life Podcast: Witches, Wizards, and Magic
  - What is the difference between magic and miracles? What magic is forbidden? (Divination)
  - If you can't read stories about sinners, you can't read the Bible.
- Doug Wilson: Every government is a theocracy; every government has a state religion. America's is secularism.
- Ad Fontest podcast, Concerning Pipe-Weed
  - Alcohol and tobacco should accompany and enhance contemplation or conversation, not be enjoyed solely for their pleasure. Otherwise, they are masturbatory. (BK: not sure I agree with this but it's an interesting thought. Would this include solo video games, lowbrow books, dessert?)
- Scott Hahn: Roman Catholic church believes vicarious satisfaction instead of penal substitution: Christ fulfilled the Law on the cross by loving God with all his heart, soul, and strength, rather than taking on sin and God's wrath. Taking Eucharist is how you fulfill the First Commandment and enter into Christ's satisfying justice. The Father did not put our sin on the Son and treat us as righteous.
- Peter Kreeft: *The Brothers Karamazov* and *The Lord of the Rings* are the two greatest novels ever written.

## Quotes
- "There, peeping among the cloud-wrack above a dark tor high up in the mountains, Sam saw a white star twinkle for a while. The beauty of it smote his heart, as he looked up out of the forsaken land, and hope returned to him.For like a shaft, clear and cold, the thought pierced him that in the end the Shadow was only a small and passing thing: there was light and high beauty for ever beyond its reach." --J. R. R. Tolkien, *The Return of the King*
- "So you were thrown away," snapped Granny. "So what? She's hardly more than a child, and children throw us all away sooner or later." --Terry Pratchett, *Equal Rites*

## Words
- Wanderjahr: year spent by an apprentice travelling and practicing before entering the profession of his trade