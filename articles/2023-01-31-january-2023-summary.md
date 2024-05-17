---
title: January 2023 Summary
description: Summary of what Brian read, thought, and did in January 2023
published: 2023-01-31
authors:
  - Brian
tags:
  - month-summary
---

## Personal
- First visit to Bookleggers Used Bookstore
- Rejoined choir
- Selected for the pastor search committee
- Dan Underwood took me deer hunting, my first time hunting
- Eagles won the NFC championship

## Writing, Links, Podcasts

<div class="stack cards">
{% for item in collections.all | byDate("2023-01", "yyyy-MM") -%}
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
- The Bible Project podcast
  - The Torah is called the Law because is contains law; it is a narrative, not a law book. Talmud is necessary to fill in the gaps. Couldn't run the system just from the Torah.
- J. Daryl Charles (First Things)
  - Human nature is tainted by sin, not annihilated: the imago dei cannot be annihilated. Grace restores nature. We can keep natural law, and reason. People do not stop having children or joy from children because of sin; family and marriage is still sacred.
- Angelina Stanford
  - Ambition is a vice, the opposite of vocation. Don't attempt great things for God, be faithful to your calling. Ambition is chasing a goal; vocation is being faithful and letting God work. Ambition is, "I will be the best plumber in my city"; vocation is, "I will be the best plumber I can be, for God's glory".
- Jonathan Pageau
  - When an atheist ascribes value to science, they are making a religious move: science does not make value hierarchies.
  - Popular rhetorical move: "that thing is just element 1 and element 2". E.g. "the Crucifixion is just a man dying on a piece of wood", "football is just men running around with a ball", "music is just major and minor chords". (BK: synergy-the whole is greater than the sum of its parts)
  - Christians do not die and go to heaven. Heaven is not a physical place. Resurrection is our future hope.
  - Ritual is inevitable. Even relationship is ritualistic: look at someone for a time then look away, stand a certain distance away, alternate who talks.
  - Your appearance is a choice: dressing casually says something just as dressing formally does.
  - Rebellion follows a pattern (tattoos, piercings, colored hair).
  - Why is making the sign of the cross wrong, but waving is okay?
  - Eastern Orthodox church doesn't believe in substitutionary atonement: salvation is healing and uniting with God.
- Robert Nozick: in 1974 asked the philosophical question, would you hook up to the Experience Machine (aka, the Matrix)? Three reasons against:
  1. We want to do, not just simulate experiences
  2. We want to be real people, not just blobs
  3. "Being plugged into the machine limits our experience to man-made reality, and cuts us off from anything outside of it."
- Alan Jacobs: Brad Gregory claims the Reformation smashed a millennium of shared Catholic intellectual thought, causing modernity. This ignores the Roman Catholic church's culpability through its failures, that Western thought was not uniform pre-Reformation, and that Protestants have also fought against modernity. (BK: reminds me of the idea that we were better off when we all got our news from Walter Cronkite: even if it was wrong, it was shared news.)
- Carl Trueman
  - Roman Catholic criticism of the perspicuity of scripture fall flat when the only alternative offered is the papacy. Diversity of interpretation is matched by diversity of belief and behavior in popes.
  - The papacy was not viewed as authoritative in the first centuries of church history. Neuman's doctrine of development cherry picks.
  - Papacy was corrupt in the late Middle Ages, had multiple popes, and refused to reform itself. Medieval Christendom was a failure.
  - "One cannot blame Roman Catholics for disliking Protestants: our very existence bears testimony to Roman Catholicism's failure."
  - Italian Catholics pray more to Padre Pio and Anthony of Padua than to Jesus and Mary. Laity do not follow church teaching on birth control, Catholic politicians liberalize abortion laws, with no repercussions. Disagreement on papal infallibility and Vatican II.
  - Doctrinal disagreements go back to the New Testament; they did not start with Luther.
  - The printing press shattered the Roman Catholic church's "unified knowledge", not the Reformation. That's why the Roman Catholic church banned books in the 16th century and maintained the Index of Prohibited Books until 1965 (although it still retained its moral force, according to then-Cardinal Ratzinger). Les Miserables and Paradise Lost were banned.
- Tim Challies: At Trent, the Roman Catholic church pronounced sola fide anathema. They have never rescinded.
- Doug Wilson
  - Private judgment is inescapable, because we have competing authorities. The Roman Catholic church has factions, has not ruled on every Bible passage, has made contradictory statements that it hasn't resolved (Unum Sanctum vs catechism says Muslims can be saved). Its written documents must be interpreted. It has not compiled its infallible determinations.
  - The choice is not between countless sola scriptura Protestant denominations and Rome: it is between sola scriptura and infallible interpretation.
  - Schism and unity can both be sins.
  - Private judgment has been abused, and all good things have been.
  - Private judgment has led to chaos? Rome's rejection of private judgment caused the schism.
  - There are not 25,000 Protestant denominations. That number comes from the World Christian Encyclopedia, which also lists 223 Roman Catholic denominations. Their list of traditions is a better grouping: 21 Protestant traditions, 19 Eastern Orthodox, 16 Roman Catholic, 6 Anglican, etc.
  - In Romans 11:18, Paul reminds the church at Rome that is a branch, not the root.
  - Protestant churches can accept Roman Catholic baptism; the reverse is not true. The original Reformers did accept Roman baptism, while they were in mortal danger from the Roman church. A Roman Catholic that takes communion at a Protestant church doe sso on Protestant terms; refusing them would be replicating one of their mistakes.
  - Contradictory to criticize Protestants for having no sense of ritual, history, or place; and that we're too attached to our worship practices, revere the Constitution and the Founding, and have never left the state. Can't be both gnostics and nationalists.
- Joffre Swait: Historically, the Reformed Presbyterian church has produced businessmen and accountants, but not artists.
- Lord of Spirits podcast, Episode 1
  - In Ex. 21:6, elohim (KJV "judges") refers to dead ancestors (God is not the God of the dead, but of the living).
  - In Ps. 82:6-7, evil spirits can die (spiritually: separated from God at final judgment)
  - German liberal theologians invented the term "monotheist" and claimed Israel went from polytheism to monotheism (and religion kept evolving to German protestantism).
- St. Jude is the patron saint of lost causes because people only asked him for help if they were desparate (because he was associated by name with Judas Iscariot)
- Lewis wrote the Narnia books in a different order than they were published:
  1. *The Lion, the Witch, and the Wardrobe*
  2. *Prince Caspian*
  3. *The Voyage of the Dawn Treader*
  4. *The Horse and His Boy*
  5. *The Silver Chair*
  6. *The Last Battle*
  7. *The Magician's Nephew*
- "Protestant" doesn't mean "protestor" but "confessor" (Latin: protestari, to confess or profess). It was not used to mean "object" or "dissent" until 60 years after the term first appeared in English. 
- Protestants were originally called "evangelicals". 
1. Peter Leithart
  - Eventually there will not be denominations, there will just be churches. Jesus prayed that his followers would be united, and it can't be eschatalogical because that is how we'll convert the nations. Protestants should do our part, sifting the riches from the dross: liturgial worship, weekly Eucharist, read Bible typologically, embrace ecclesiastical authority--all following the Bible.
2. Doug Wilson
  - For ecumenism, one-true-churchism must be dropped, which is a Roman Catholic and Eastern Orthodox change, not a Protestant.
  - Sifting out the riches from the dross was the Reformation.
  - Two types of unity: Ephesians 4:3 unity we already have through the Spirit. Institutional unity is in the future; it can't be required for evangelism because we've been doing missions work all along.
3. Peter Leithart
  - Ecumenism would also be a big change for Protestants because "not Roman" is a big part of our identity. 
  - Ironic that a post-millennialist says we must wait instead of trying for unity. 
  - Spiritual unity must be institutional because humans are incarnate.
4. Doug Wilson
  - Average Protestant doesn't know anything about Roman Catholicism.
  - Institutional unity is necessary, and will come, but moving that direction too early will cause less unity, not more.

## Quotes
- "So you were thrown away," snapped Granny. "So what? She's hardly more than a child, and children throw us all away sooner or later." --Terry Pratchett, *Equal Rites*
- "Can't you see you're not making rock and roll better? You're just making Christianity worse." --Hank Hill
- "I changed my mind, and it is a practice I commend to you." --Doug Wilson
- "The real conflict is not between Scripture and tradition but between catholicism and one particular tradition (Romanism)." --Kevin Vanhoozer

## Words
- Brick: a generous, helpful, reliable person
- Dun: dark, gloomy
- Mercer: silk dealer
- Perspicuous: clearly expressed