---
layout: article
title: October 2022 Summary
description: Summary of what Brian read, thought, and did in October 2022
published: 2022-10-31
authors:
  - Brian
tags:
  - month-summary
---

## Personal
- Restarted [sfc.blue](https://sfc.blue) project
- Chattanooga day trip: Ruby Falls gift shop, McKay's, Community Pie (excellent pizza)
- Elected and ordained as a deacon. Joined HR committee.
- Tim visited
- Celebrated Amber's birthday
- Day trip to Lyon Farms
- Phillies down 5-0 in World Series Game 1, won 6-5. Most exciting World Series game I've seen.

## My Thoughts
- "Inimitable" and "illimitable" make a great pair

## Writing, Links, Podcasts

<div class="stack cards">
{% for item in collections.all | byDate("2022-10", "yyyy-MM") -%}
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
- Jason Baxter
  - Your goal in a debate is not to convince your interlocutor, but to make them wish you were right.
  - C. S. Lewis anticipated Plato scholarship by 50 years without the collected editions and translations available now, just reading manuscripts in the Bodleian.
  - Lewis said the Romantics Wordsworth and Coleridge were the last of the Medievals. Owen Barfield said the Inklings were the last of the Romantics.
  - The Romantics tried to recover a sacramental view of the material world.
  - Lewis said the material world's relationship to the supernatural world is like a symphony transposed for piano.
  - Heaven wasn't boring for the medievals: it was the barely-glimpsed glory that couldn't fit into our reality.
  - Freud was the epitome of modern thinker that Lewis was against. 
  - Why study the medieval model? Get out of our mindset to recover humanity. Maybe science will eventually come around until the metaphors work again.
  - The diversity of the church through time: blind spots, but also strengths and treasures. Strengths of modern society are interiority, individuality, equity.
  - Aquinas only owned 200 books, but he had all of them memorized.
  - A medieval would not say he read a book until he could communicate its arguments step-by-step, chapter-by-chapter. They read with the intent to remember.
- Cindy Rollins
  - You don't want to be the voice in your child's head saying, "Read the Bible", "Do the right thing". If it's your voice they hear, when it's time for your child to leave the home they may also try to leave behind that voice.
  - Charlotte Mason said you only learn what you pay attention to. You can't make someone pay attention, you can only spread a feast. Respect the child and give them hard and good things.
  - Dumbing knowledge down to a child's level is the opposite of education.
  - Robert Farrar Capon said that in the Bible, the opposite of Sin is not virtue, it is Faith. Faith in a God who draws all to himself in his resurrection. (via Cindy Rollins)
- Angelina Stanford
  - Education is one person sharing what the love with another person.
  - In Celtic storytelling, when a characters gets in an impossible situation, the way out is to go to the one person you trust and confess everything. Also seen with Louisa in *Hard Times*, the wife in Chaucer's *Franklin's Tale*.
  - At the lowest point in a comedy there is a miraculous death and rebirth image before the upswing.
  - Breakfast-lunch-dinner schedule was invented for British factory workers. Pre-Industrial Revolution, British people did morning chores then ate mid-day meal to break fast.
- Ben De Bono
  - Frames: Compared to what (realism instead of idealism), is it worth the cost (cost-benefit analysis), 80-20 rules (Pareto principle), crappy first draft and 10% better (iterate), what feels human (intuition), directional accuracy (don't let the perfect be the enemy of the good), I might be wrong (strong opinions weakly held), look for two ways to win (agile)
  - Summary of Ian McGilchrist: right hemisphere deals with big picture, interacts with reality, makes us human. Left is details, constructs a virtual reality.
  - Music is the language of the right hemisphere.
  - Confront your shadow self to realize your potential. Don't settle for mediocrity.
- Dietrich Bonhoeffer
  - Jewish days began in the evening. Christian days begin in the morning because of the Resurrection.
  - Community Bible reading should be long passages; personal Bible reading should be shorter passages with meditation. Meditation leads to prayer. If your mind wanders, pray about what you wandered to.
- Bennet Cerf
  - Television doesn't take people away from books. If you smashed all the televisions, the TV addicts would not be transformed into readers.
  - Publishers aren't censors because the make suggestions that the author can choose to take or ignore, and maybe publish elsewhere.
- Wendell Berry: do something every day that does not compute. (via Angelina Stanford)
- Northrop Frye: Sacred space shrinks from Garden of Eden, to Abraham's Promised Land, to Joshua's Promised Land (map of 12 tribes in Bibles was land they claimed, not permanently held), to Judah, to Jerusalem, to the Temple, to the Holy of Holies, to nothing after the Abomination of Desolation. (via Kay Pelham)
- Heather Goodman: At the Ascension, the entire cosmos became sacred space: the kingdom of Christ.
- C. S. Lewis: The author intends, the book means. Author cannot guarantee meaning. "The meaning of a book is the series or system of emotions, reflections, and attitudes produced by reading it." In his teaching, he emphasized not authorial intent (subjective) but the "receptive imagination" and the objective text.
- Kelly Cumbee: Irish kingdoms always had a king, a bishop, and a poet.
- Stephen Greenblatt: First permanent theaters were built in Shakespeare's lifetime. First was the Red Lion. Also had mystery plays (Bible story retellings); these were banned by Protestants because of association with Roman Catholics. Hamlet's phrase "out Herods Herod" refers to the bombastic Herod from mystery plays. Also travelling players.
- Joffre Swait: Don't let children play or draw in church service because we aim for participation. Train to participate, not to sit still. Do what everyone else is doing. Don't send the message that church is onerous for children. Don't be too strict with staying quiet and still. Father should take the difficult children, out of service if necessary. Work up to full service. Take out before sermon, even when behaving, to regroup.
- Stratford Caldecott: It is the memory of time that makes us old; remembering eternity makes us young again.
- Malcolm Guite: Chesterton and Belloc mastered the ballad form.
- The Seven Sisters of US mainline Protestantism: United Methodists, Christian Church (Disciples of Christ), PCUSA, Episcopal, Evangelical Lutheran, American Baptists, United Church of Christ.
- Hedonism is seeking pleasure for its own sake. Epicureanism is avoiding pain and anxiety, realizing unrestrained pleasure can bring pain.
- The scientific name of the American Robin is *turdus migratorius*.
- Leprosy was common in Elizabethan England.
- In England, oaths were often sworn on swords; they are shaped like a cross.
- Charles Wesley's hymn *And Can It Be* references Pope's poem *Eloisa to Abelard*: "Thy eyes diffus'd a reconciling ray, / And gleams of glory brighten'd all the day." Sight was thought to result from light sent out from the eye, as well as light received from the eye.
- Powell's City of Books in Portland, OR is world's biggest independent bookstore.
- Dutch Calvinist painters always included something rotting in their paintings, because the world is rotting. Quaker cross stitch samplers purposely included a mistake, because only God is perfect.
- Europe and Africa cost of living is skyrocketing because dollar is strong, because Fed increased interest rates, because US inflation was high.
  - We need to decouple these economies.

## Quotes
- "I have argued that Scripture is musical, and part of the significance of musical patterns is that it is not just a fundamental template that is lying behind all these different expressions of a theme. It is not that you have to get to that underlying theme and sweep away the particularities as remainder, rather, the significance is found in the variations and the union." --Alastair Roberts, review of Mathieu Pageau's *The Language of Creation*
- "To me the greatness of the story, the horror of the story, and the threat to humanity the story portrays lie in the fact that Frankenstein has usurped the power, not of God, but of women. He has made a man without a mother. His science has eliminated the principle of femininity from the creation of human life." --Andrew Klavan (via Cindy Rollins)
- "Tradition is not the worship of ashes, but the preservation of fire." --Gustav Mahler
- "If you raise your children right, they will grow up to rob your library." --Thomas Banks
- "Words are like Leaves; and where the most abound, / Much Fruit of Sense beneath is rarely found." --Alexander Pope

## Words
- Addle: putrid, barren (Heb. to fail)
- Arrant: complete
- Bewilder: to lose in pathless places (wilder: "wander"; from "wild")
- Bourn: border
- Garret: attic, turret, watchtower
- Garreteer: inhabitant of a garret, a poor author
- John-a-dreams: a sleepy idler
- Orthodox: ortho ("right") + dox ("opinion")
- Pith: soft center of plants, spinal marrow of animals, energy, importance, quintessence
- Quintessence: fifth and highest essence of power (alchemy), extract which contains the virtue (most essential part)
- Winkle: gleam intermittently; displace ("winkle out an answer")