---
layout: layouts/post.njk
title: Lessons from 6 software rewrite stories
description: the single worst strategic mistake that any software company can make
publishDate: 2021-06-12
category: technology
author: Herb Caudill
minRead: 18
featuredImage: https://miro.medium.com/v2/resize:fit:3818/format:webp/1*ywYwvB-aydv0Ovx7K-5P3g.jpeg
---

<!-- @format -->

<!--StartFragment-->

> “As if source code **rusted**!” — *Joel Spolsky*

Almost two decades ago,

[Joel Spolsky](https://medium.com/u/869c7e626b83?source=post_page-----635e4c8f7c22--------------------------------)

excoriated Netscape for rewriting their codebase in his landmark essay [Things You Should Never Do](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/).

He concluded that **a functioning application should never, ever be rewritten from the ground up**. His argument turned on two points:

-   The crufty-looking parts of the application’s codebase often embed hard-earned knowledge about corner cases and weird bugs.
-   A rewrite is a lengthy undertaking that keeps you from improving on your existing product, during which time the competition is gaining on you.

For many, Joel’s conclusion became an article of faith; I know it had a big effect on my thinking at the time.

In the following years, I read a few contrarian takes arguing that, under certain circumstances, it made a lot of sense to rewrite from scratch. For example:

-   Sometimes the legacy codebase really *is* messed up beyond repair, such that even simple changes require a cascade of changes to other parts of the code.
-   The original technology choices might be preventing you from making necessary improvements.
-   Or, the original technology might be obsolete, making it hard (or expensive) to recruit quality developers.

The correct answer, of course, is that **it depends** a lot on the circumstances. Yes, sometimes it makes more sense to gradually refactor your legacy code. And yes, sometimes it makes sense to throw it all out and start over.

**But those aren’t the only choices.** Let’s take a quick look at six stories, and see what lessons we can draw.

_(Bonus: ASCII art summaries of each story!)_

![](https://miro.medium.com/v2/resize:fit:1050/1*VM8ZUQpZjXwT2kv2LiMa2A.png)

# 1. Netscape

![](https://miro.medium.com/v2/resize:fit:1050/1*CcOcjs6ob6xk3Yc3BvajYQ.png)

**Key:** 📝= rewrite, 💀 = dead end

Netscape’s disastrous 5.0/6.0 rewrite is the original poster child for “never rewrite”, thanks to Joel.

Netscape’s Navigator, first released in 1994, defined the early years of the commercial internet. Less than two years after it was released, the company’s $3-billion IPO launched the dot-com era.

Netscape’s first serious competition came from Microsoft’s Internet Explorer, which came out in 1996.

At the beginning of 1998, Netscape was still the leading browser, but just barely. Netscape’s retail price was $49; Microsoft was giving IE away for free and shipping it with Windows as the default browser.

![](https://miro.medium.com/v2/resize:fit:1050/1*xK0A1DvccTAfcLbpfjqKuQ.jpeg)

After version 4.0 of Netscape was released, the company [announced](https://www.cnet.com/news/netscape-sets-source-code-free/) that version 5.0 would be given away for free, and developed by an open source community created and funded by the company, called Mozilla.
