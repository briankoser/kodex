---
layout: article
title: "Astro: Static Sites 3.0"
description: Brian shares his experience building a demo with Astro.
published: 2021-08-19
authors:
  - Brian
excerpt: This month is my 8-year anniversary of working with static site generators.
---

This month is my 8-year anniversary with [static site generators](https://github.com/briankoser/kotangent-jekyll/commit/5d0d8780a00a84b8cc63cb1a775bc6a9e989d7c5). I'm not using Jekyll anymore, so I don't have to buy a gift, right?

The static site [hotness](https://css-tricks.com/a-look-at-building-with-astro/) right now is [Astro](https://astro.build/blog/introducing-astro), and it deserves the attention. The progression from 11ty et al. is big enough to warrant a "3.0" moniker (writing HTML manually would be 1.0 and Jekyll until now is 2.0). I predict React and Vue at least will develop similar offerings (although maybe they think Next/Nuxt is close enough).

To learn Astro, I returned to my favorite technology learning method: create a deadline, create a project. The deadline was a Lunch and Learn at work, the project a fantasy football stats report demo. Check out the resulting [slide deck](https://slides.com/bkoser/deck-08fbdf/) and [code](https://github.com/briankoser/fantasy-football-report-astro).

## Astro is good

This is how I want to build websites. It's the [Rule of Least Power](https://www.w3.org/2001/tag/doc/leastPower.html) in project form. It's progressive enhancement baked into a framework. My personal projects are almost completely static...almost. JavaScript inevitably creeps in, and that's now okay.

Vue sold me on the component model. Grouping code by feature instead of file type makes the project easier to understand, which is more maintainable.

Almost everything feels intuitive (two exceptions, keep reading).

## It's not finished

Now in my thirties, with three little girls and a fourth imminent, I'm too old for beta software.

I implemented my Collections demo page three times: once based on the docs, the second time based on a [blog post](https://daily-dev-tips.com/posts/how-to-render-individual-pages-from-an-external-collection/) linked from a [Github issue](https://github.com/snowpackjs/astro/issues/973), and the third time based on the docs again because that was actually the new correct syntax. Then the day I gave my presentation, Collections were scrapped and replaced with [Dynamic Paths](https://github.com/snowpackjs/astro/issues/1004). Which looks good! But could possibly change again.

I also couldn't get components to work with the few chart libraries I'm auditioning (tune in this fall for "Koser's Next Top JavaScript Chart Library"!). That one is probably my fault. I thought I could slap on a `client:load` attribute and always have access to `document`, but I must be getting confused somewhere in the chain of: 

JS browser module → node package → Astro component → hydrated Astro component

Last, when I tried to deploy the demo to Netlify, it failed. Probably easily fixed, but since I'm abandoning the project for now, not worth the time.

## setTimeout(useAstro, forNow);

Those aren't real negatives, just negatives for me, today. Building software is iterative and Astro will be better for the changes. Heck, ten years ago when I had free time to spare, it wouldn't have been a big deal to me. Now I just want to use your product. 

I won't be rewriting any existing projects in Astro for now ([like Robin did and regretted](https://www.robinrendle.com/notes/2021-08-11-redesign-everything-broke/)). But I'll be ready, when Astro (or one of the [current](https://slinkity.dev/) or future competitors) is ready.