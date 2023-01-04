---
layout: article
title: November 2022 Summary
description: Summary of what Brian read, thought, and did in November 2022
published: 2022-11-30
authors:
  - Brian
tags:
  - month-summary
---

## Personal
- Phillies lost World Series.

## My Thoughts
- Jonah contrasts with Noah: both heard God's voice. Noah obeyed, Jonah disobeyed. Noah's preaching was ignored, Jonah's preaching was heeded. Ark preserved Noah, fish preserved Jonah. Noah lands on a mountain, Jonah lands on a beach.
- Jonah is the prodigal son's older brother.
- Saying God is throwing a fit when he punishes sin is like if I built an obstacle course for my daughters with a barrier to rope climb over, my daughter runs up to it and bangs her head repeatedly on it, and you say, "Brian is such a jerk for building this obstacle course!"
- I am a dabbler.
- The Dapper Dabbler would be a great Silver Age Batman villain.
- On hell, in response to Preston Sprinkle
  - After Irenaeus (1st century), Ignatius (2nd century), and Athanasius (3rd century), why are there no proponents of annihilationism until the Millerites (from whom the Jehovah's Witnesses and Seventh-Day Adventists split)?
  - The crux of eternal conscious torment vs annihiliationism is are souls eternal. Immortal souls is apparently out of favor (even for Thomists and Neoplatonists?)
  - "Eternal doesn't always mean forever"; same goes for heaven?
  - Punishment is neverending but not the act of punishing - reasonable point
  - For all OT arguments: the Jews had no concept of resurrection until after the OT. You can't use the OT to argue for or against.
  - The Devil is tormented forever, but maybe not the wicked - why would the Devil be eternal if souls are not?
- Napoleon playing 3D chess: Russian army pursued him through Europe, realized Russia was behind Europe, planting seeds of revolution.
- *Gattaca*: humans can push past logical limits
- Thinking medieval painters were poor artists because their art was unrealistic is like thinking the Simpsons animators are poor artists because people don't really have four fingers per hand and yellow skin.
- Time management is a zero-sum game (you can't get more time).

## Writing, Links, Podcasts

<div class="stack cards">
{% for item in collections.all | byDate("2022-11", "yyyy-MM") -%}
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
- Bishop Barron, "Called Into the Depths" sermon
  - Sea is symbol of chaos (tohu wa bohu, Flood, Red Sea, Jordan, Job, Noah, Sea of Galilee)
  - Notre Dame looks like a ship: on an island in a river, flying buttresses like oars. Nave = ship.
  - Through our connection to God, we are connected to all creation. The Church is the ship/ark we sail through chaos.
  - *Field of Dreams* is Noah retelling.
  - Build an ark, build the church. When the ark lands, open and let out the life.
  - Noah is about spiritual survival. Jonah is about spiritual mission.
  - *Moby Dick* is the great American novel.
- Literary Life podcast, Dracula episodes 
  - Monsters are from pre-history and must be defeated before civilization starts. Monsters are solitary.
  - Enlightenment reacted against medieval superstition. Gothic novels reacted against Enlightenment, medieval sensibility.
  - Derrida deconstructed language: words do not have inherent meaning.
  - Through medieval period, monsters are Cain/sin/Satan. Modern psychology made them the Other: traumatized humans.
  - Magnanimous - magna anima = big soul, great mind
  - Pusillanimous - pusil anima = small soul
  - God is not in a snit; the Flood and Jonah's storm are spiritual physics. Fighting your mission/sin brings storms.
  - God through the fish swallows Jonah's will (constrains) that Jonah's will would be turned to God's - like Moses in the wilderness, David, Paul.
  - Becomes greatest preacher of repentance ever.
  - Disciples in boat (church). Jesus is asleep (gives peace in storms).
- ECMAScript 2022
  - static/private (#private field)
  - RegExp match indices
  - Top-level await
  - Object.hasOwn()
  - .at() (indexing, including negative indexing)
  - Static initialization blocks
  - Error.cause
- Ben De Bono 
  - Not all objective truth can be reduced to math. *Moby Dick* is objectively better art than *Jupiter Ascending*. 
  - When excercising, you can push past your limits to euphoria.
  - Time management: unlimited to do, limited time. Every time you do something, you're not doing something else (fixed amount of time).
  - Limits are positive because they let you express value: no limits means no values.
  - Butlerian Manifesto
    - 1. If technology progresses faster than humanity, we need to slow it.
    - 2. We need to redefine progress as "increases human flourishing".
    - 3. We seek an abundance of life, not an extension.
    - 4. If we reach a point where the choice is all or nothing, we must choose nothing.
- Doug Wilson
  - When the Constitution was ratified, 9 of the 13 states had an official denominational affiliation.
  - On the same day Congress finalized the first amendment, they proclaimed a national day of thanksgiving and prayer.
  - 1892 "Church of Holy Trinity v United States" - Supreme Court: "These, and many other matters which might be noticed, add a volume of unofficial declarations to the mass of organic utterances that this is a Christian Nation." Cited state constitutions, Declaration of Independence, Constitution, course cases.
- Angelina Stanford
  - Tolkien and Lewis stopped talking literary theory in abstract and started writing stories. 1st gen. Inkling scholars focused on apologetics, 2nd on fictions. No one (except Angelina) is studying their literary theory.
  - T. S. Eliot declined to publish a C. S. Lewis article on his neo-Aristotelian literary theory in his magazine.
- Preston Sprinkle: of all the passages for Origen to read literally, he read literally the passage in Matthew about becoming a eunuch for the kingdom.
- Seth Studer: Eastern Orthodox church venerates icons because of the incarnation. It's not worship, it's respect, like the Japanese bowing to their elders.
- "Detached Thoughts on Books and Reading", fun Charles Lamb essay
- Sam Holbrook, who umpired in the 2022 World Series, played for Cindy Rollins's dad.
- About 50 years after Shakespeare's death, women started playing the women's parts. Susanna Mountfort legendarily went mad after a love affair ended, escaped her keepers and lept onto a stage performance of "Hamlet", playing Ophelia spectacularly.
- Thomas Betterton was the premier actor-manager of his day. Played Hamlet to great acclaim. Knocked over his chair when seeing the ghost in the queen's chamber, making that the standard (although it may go back further: his mentor saw the performance of the successor of Richard Burbage, the first Hamlet).
- Siege Perilous was the empty seat at the Round Table reserved for the knight who found the Holy Grail
- Mare Nostrum was the Roman name for the Mediterranean Sea (Lat. our sea)
- Lockhart's Lament: "Mathematics is the art of explanation."
- How to beat a knight: flood the plain (Flanders), traps, pikes, halberds
- Trebuchets and cannons were named, like ships. Why are tanks and airplanes not named?
- First cannonballs were stone, rounded by hand.
- St. Petersburg was an artificial city. Peter I turned a swamp into the capital of Russia. Built canals not realizing they would freeze over in winter.
- The term "ghost buster" precedes the movie: a 1952 short film invented the term (off of "gang buster").

## Quotes
- "When did the tool become a god?" --Martin Shaw, via Ben De Bono
- "It should cost you something to encounter God." --Ben De Bono
- "Machines will be capable, within twenty years, of doing any work a man can do." --Herbert Simon, AI pioneer, 1965

## Words
- Bathos: the art of poetic sinking, ludicrous descent from the elevated to the low, anticlimax
- Dabble: play in water, do any thing in a slight or superficial manner, tamper (Heb. dip)
- Farrier: smith who shoes horses
- Fettle: order, repair (fine fettle = good spirits)
- Fluvial: belonging to rivers
- Lethe: oblivion, a draught of oblivion
- Parasol: small ladies umbrella for rain or sun (Lat. sol: sun)
- Umbrella: shade, carried by hand to shelter the person from sun, rain, or snow (Lat. umbra: shade, shadow)