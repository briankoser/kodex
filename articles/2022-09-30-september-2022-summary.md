---
layout: article
title: September 2022 Summary
description: Summary of what Brian read, thought, and did in September 2022
published: 2022-09-30
authors:
  - Brian
tags:
  - month-summary
---

## Personal
- Started learning Spanish with the girls, supplemented with Duolingo.
- Eagles played Vikings on MNF and it felt like rewatching the 2017 NFC Championship.
- Found out my dad had a dog when he was a kid: Duffy, a collie-German shepherd mix.
- Hosted Sunday School class for lunch: tacos.
- Neighbor Sandy identified front trees as silver maples: when they built the neighborhood, they planted two silver maples in every front yard.
- First shoutout on the Literary Life podcast (for observations of harpy images with Mrs. Sparsit in *Hard Times*).

## My Thoughts
- Must be a heretic on some level to be human: Protestant Reformation was heretics diversifying the Church.

## Writing, Links, Podcasts

<div class="stack cards">
{% for item in collections.all | byDate("2022-09", "yyyy-MM") -%}
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
- Ben De Bono
  - Metric is top-down and artificial. Standard is bottom-up, natural, human.
  - Liturgy/ritual is the unspoken language between the Church and God. The liturgy gets you out of the way, out of your own head, so you can receive. The words are less important than the spaces between the words. Like a Malick film: the power is not in the plot but between you and the film.
  - Herbert: ideology has gone too far when you're embarrassed by the past.
  - "To be a human is to be a heretic on some level." If you adhere completely to an ideology, you are a machine. Being a heretic is dangerous (great saints and sinners are cut from the same cloth) but "be a heretic if you want to live."
- Bishop Bob Barron: The pro-life position is not dogma but moral, so should be legislated. All laws impose morality.
- Michael Lynch (Ad Fontes podcast): classical teachers taught Latin because it was the lingua franca. Modern classical education should study English. Students should master it: vocabulary, writing poetry and prose.
- Cindy Rollins: you must let children become independent. Let them make mistakes, be alone, solve problems.
- Joffre Swait: Separation of church and state means no state-sponsored church. It's not a separation of state and religion, which is impossible (and if you try, the state becomes the religion).
- Doug Wilson: The Salvation of Emeth: Westminster Confession says salvation is ordinarily through the church. Naaman was saved without becoming a Jew. Solomon's temple had Court of Gentiles. Luther was leery, but Zwingli said Socrates could have been elect.
- Rogelio: Starting Strength is good (it's based on Bill Starr's classic *The Strongest Shall Survive*) but not the One True Workout. Rippetoe's "jump and shrug" power clean technique is bad.
- Angelina Stanford: woman were freer in Elizabethan England than in Victorian England. The "angel in the house" idea overspiritualized and idealized women; they couldn't go out without a chaperone because the might succumb to tempation. They could be ruined by even a rumor of a scandal.
- Isaac Watts published a translation of the Psalms in which every instanct of "Israel" was replaced with "Great Britain".
- Exocentric verb-noun compound agent nouns: usually English uses the noun + verb formulation: firefighter, naysayer. In the 19th century, many were formed verb + noun: pickpocket, spendthrift, swashbuckler, turncoat, lickspittle, skinflint, turnkey, scofflaw, lackwit, cutthroat, sellsword, killjoy

## Quotes
- "I could not look on Death, which being known, / Men led me to him, blindfold and alone." -- Kipling, "Epitaphs of the War"
- "It is very beautiful," I said, "and, as you say, it is very English. Charles Dickens, who was almost more English than England, wrote one of his rare poems about the beauty of ivy. Yes, by all means let us admire the ivy, so deep, so warm, so full of a genial gloom and a grotesque tenderness. Let us admire the ivy; and let us pray to God in His mercy that it may not kill the tree." --G. K. Chesterton, "The Riddle of the Ivy", *Tremendous Trifles*
- "In *Hard Times*, the pedantry of the obstructing society is associated with a utilitarian philosophy and an infantile trust in facts, statistics, and all impersonal and generalized forms of knowledge." --Northrop Frye