---
layout: article
title: Antonio, a Board Game Geek trading tool
description: Brian details how he programmed a board game API.
published: 2015-05-30
authors:
  - Brian
tags: 
  - programming
last_updated: 2016-08-06
excerpt: If you’re into designer board games (you should be!) and you’re online (…you are!), then you’re probably aware of BoardGameGeek, which is the board game website, where aficionados discuss, trade, and celebrate all things board gaming.
---
<ins datetime="2016-08-06">I’ve decommissioned Antonio; it was really only used briefly. You can still access the repository at [Github](http://github.com/briankoser/antonio).</ins>

If you’re into designer board games (you should be!) and you’re online (…you are!), then you’re probably aware of [BoardGameGeek](http://boardgamegeek.com), which is *the* board game website, where aficionados discuss, trade, and celebrate all things board gaming.

Recently, a fellow named Scott Jaworski [asked](http://boardgamegeek.com/thread/1369255/there-some-way-see-what-someone-who-wants-what-i-h) if there’s a way to find a list of board games he could get in a trade if he traded one of his away. <abbr>BGG</abbr> doesn’t support this functionality, and it sounded like an interesting and easy project, so I went ahead and did it. Meet [Antonio](http://koser.us/antonio). Here’s how he was formed:

Most of the necessary data is availalbe from the <abbr>BGG</abbr> <abbr>API</abbr>. Rather than using the official [BGG XML API](http://boardgamegeek.com/wiki/page/BGG_XML_API2) directly, I decided to use [E. Strathmeyer’s JSON API](http://boardgamegeek.com/thread/1139853/ajax-ready-bgg-api-any-web-programmers-out-there), which is built upon the former. I considered [a different JSON API](http://bgg-json.azurewebsites.net/), but it was down when I started coding. Maybe next time.

One item not provided is the list of users that want to trade for a game. So, I wrote my own <abbr>API</abbr>. Having never written a web <abbr>API</abbr> service, I started researching technologies. The best option looked to be an [ASP.NET Web API](http://www.asp.net/web-api), so I read some of the Microsoft tutorials and got started. The <abbr>API</abbr> itself was surprisingly easy to set up, as was deploying to Azure. I used [HTMLAgilityPack](http://htmlagilitypack.codeplex.com/) and [Fizzler](https://code.google.com/p/fizzler/), which made screen scraping easier than expected. In fact, while I expected this to be the most difficult piece of the puzzle, it turned out to be one of the easiest.

I did get tripped up by <abbr>CORS</abbr>, cross-origin resource sharing. This had to be enabled so I could call my <abbr>API</abbr> from a web page. Once I identified the problem it was [not difficult to fix](http://www.asp.net/web-api/overview/security/enabling-cross-origin-requests-in-web-api).

Next I set up a simple web page, grabbed jQuery, and started writing the client-side portion of Antonio. This portion took the most time, and had some challenges of it’s own, a couple of which were solved by new-to-me features: the [apply](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) function and [promises](http://api.jquery.com/deferred.done/).

One disappointment was that, while you can get the games a user wants to trade from <abbr>BGG</abbr>’s <abbr>API</abbr>, you can’t get it on demand. The data has to be generated, which in my experience takes up to 24 hours. My solution was to display a list of users whose data is being generated, but it’s annoying that a user could type a game into Antonio and then have to wait until the next day, come back to the page and search for the game again. Oh well.

[Antonio](http://koser.us/antonio) was a fun project to write, and I learned a good bit about <abbr>.NET</abbr> and JavaScript to boot. Check it out, and let me know if you have any questions about anything. You can see all the code at [Github](http://github.com/briankoser/antonio). If you experience problems, you can [contact me](http://briankoser.com/contact/), [open an issue](http://github.com/briankoser/antonio/issues/new) on the Github project, or reply to [my post about Antonio on BGG](http://boardgamegeek.com/article/19376164).  
