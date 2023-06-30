---
layout: layouts/post.njk
title: Absolute Truths I Unlearned as Junior Developer
description: A few things I strongly believed when I was a junior developer
    which turned out to be wrong.
publishDate: 2021-09-02
category: technology
author: Monica Lent
minRead: 15
featuredImage: https://monicalent.com/images/typing-with-flowers.jpg
---

<!-- @format -->

<!--StartFragment-->

Next year, I’ll be entering my 10th year of being formally employed to write code. Ten years! And besides actual employment, for nearly 2/3 of my life, I’ve been building things on the web. I can barely remember a time in my life where I didn’t know HTML, which is kind of weird when you think about it. Some kids learn to play an instrument or dance ballet, but instead I was creating magical worlds with code in my childhood bedroom.

In reflecting on this first decade of getting regularly paid money to type weird symbols into my Terminal, I wanted to take some time to share **some of the ways my thinking shifted over the years as a developer**.

_For today’s junior developers_: Maybe you’ll find something here you currently believe, and get inspired to learn more about it and why the topic is so multi-faceted. Or maybe you’ll find this post encouraging because you’re already so far ahead of where I was at your stage.

_For today’s senior developers_: Maybe you can relate, and also have some funny (and humbling) stories to share about your own life lessons when you were a junior dev.

To be clear, **I think junior developers are awesome** and just showing up to learn already takes a ton of courage. This post is about my own journey and learnings, and isn’t meant to be a generalization about how all junior devs think or behave.

I hope you enjoy the post and can relate a little bit 😄

> _Thanks to [Artem](https://twitter.com/iamsapegin) and [Sara](https://twitter.com/NikkitaFTW) for your feedback on this post!_

## Absolute truths I unlearned as a junior developer

### 1. I’m a senior developer

I was 19 years old when I applied for my first technical job. The position I was applying for was called “Student Webmaster”. Which is a pretty awesome job title, because you could be considered both a “student” and a “master” at the same time. Nowadays everyone wants to be an “engineer” because it sounds fancier, but if you ask me, “master” is where it’s at. Anyways, my job was to write PHP and MySQL, and maintain our Drupal website as well as building some internal tools.

Since I’d been coding in my bedroom for a couple of years, I was pretty sure those years counted as “years of experience”. So when I was asked about how much experience I had writing PHP, I confidently answered, “3 or 4 years!”

I thought I knew a lot about SQL because I could do outer joins 😎

And when I googled it, 3-4 years of experience meant I should be making 💰

Fast forward to my latest job, which I got after 5 years of “combined” student and professional experience (which I thought was the same as normal experience). Yet in that time, I basically never had my code reviewed. I deployed by ssh-ing into a server and running git pull. I’m rather sure I never had to open a Pull Request. Don’t get me wrong, I learned a ton of awesome stuff at my first two jobs, but I’d never really worked with other devs in the same codebase. And yet, I applied for a position for “Senior Frontend Engineer”, got an offer, and accepted it.

**There I was, a senior developer at the ripe age of 24 years old.**

I mean they wouldn’t have given me this job title if I wasn’t really senior, right?! Surely, my impressive experience had brought me to this point, and people should listen to me!! Already at the pinnacle of my technical career, and the youngest developer in the office.

Like a boss 💅

#### What I eventually learned

**Not all experience is created equal.** My experience coding in my bedroom, working as a student, working in CS research, and working at a growing startup are all valuable kinds of experience. But they aren’t all the same. Early in your career, you can learn 10x more in a supportive team in 1 year, than coding on your own (or with minimal feedback) for 5 years. If your code is never reviewed by other developers, you will not learn as fast as you can – by an enormous factor.

**That’s why mentors are so important**, and the team you work with is worth so much more than a couple bucks in your paycheck. Don’t accept a junior position where you’ll be working alone, if you can help it! And don’t accept your first role (or, honestly, any role) based on salary alone. The team is where the real value is.

**I also learned that job titles don’t “make” you anything.** It’s kind of like, being a CTO with a 5-person team is different than with a 50-person team or a 500-person team. The job and skills required are totally different, even if the title is identical. So just because I had a “senior” job title did not make me a senior engineer at all. Furthermore, hierarchical titles are inherently flawed, and difficult to compare cross-company. I learned it’s important not to fixate on titles, or use them as a form of external validation.

### 2. Everyone writes tests

For the first half of my career, I worked in research. Specifically, I worked on an publicly-funded project for about 3 1/2 years, and then at a university at the NLP chair for a year and a half. I can tell you one thing: **programming in research is completely different than programming in the industry**.

For the most part, you aren’t building applications. You’re working on algorithms or parsing data sets. Alternatively, if you are building an application, chances are your work is being publicly funded – which means it’s free for others to use and usually open-source. And when something is free, that means, for the most part, you are not *really* responsible to make sure it’s always perfectly available.

Because, well, it’s free.
