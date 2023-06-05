---
layout: layouts/post.njk
title: Tips for Becoming a Competent JavaScript Developer
description: To move towards the next level, let’s focus on certain areas
publishDate: 2023-06-05
category: code
author: Gerard Van Der Put
minRead: 3
featuredImage: https://miro.medium.com/v2/resize:fit:1100/0*YF0DEqdBTo0Xj7py
featuredVideo: https://www.youtube.com/watch?v=Mus_vwhTCq0
---
# 1. Understand Plain JavaScript

As simple as this might sound, it’s often overlooked. There is a huge contrast between developers who can utilize popular tools and frameworks such as [React](https://reactjs.org/), [Vue](https://vuejs.org/), and [Angular](https://angularjs.org/) on one side and developers who know JavaScript by heart on the other side.

Obviously, they are not mutually exclusive. A good JavaScript developer will pick up new frameworks relatively easily. But this may not be true the other way around: If you’re comfortable with a framework like React, you’re not necessarily a JavaScript expert.

I cannot emphasize enough how much value it will bring you if you know the fundamentals of the actual language. Whenever you see a fragment of JavaScript code, whether is written by a colleague or a contributor to one of the libraries mentioned above, you should at least have a broad understanding of what’s going on.

*Core principles such as scopes and closures should not be mysteries to you. The same goes for garbage collection, prototyping, and syntax.*

Have a look at the following code:

```
const getUid = (() => {
  let uid = 0;
  return () => ++uid;
})();

console.log(getUid());
console.log(getUid());
```

What is happening here? Do you know? And can you explain why? You should, and you should know JavaScript and its syntax by heart.

Not because some random author tells you so but because sooner or later, you will run into a wall if you don’t. Questions like this will be asked during coding interviews. They will ask you to explain what’s going on in detail. And not to scare some of you too much, but the questions will be much harder than this one.

Don’t learn to just please other people such as recruiters, interviewers, or potential employers. Learn to add value. Value to yourself, as a competent JavaScript developer. You will bring this value with you, no matter where life brings you.

![](https://miro.medium.com/v2/resize:fit:1100/0*eLtu4JGQK_dRMRZf)



# 2. Read Quality Content

Reading — not watching. There is a reason academics and intellectuals are often called bookworms and not *screenworms*.

Skimming through countless low-quality tutorials and videos will not get you very far. More often than not, you’re not even focused when reading or watching these.

> “Tutorial Hell is when we finish a tutorial with a sense of learning and knowledge, only to chain another one after the first. Or the second. Or the fifth. And if you dare to try to write code for yourself, you feel overwhelmed. You don’t know where to start or even what to do. So what you do? Another tutorial.” — [David MM on DEV](https://dev.to/davidmm1707/how-to-escape-from-tutorial-hell-and-never-come-back-bb6)

Call me old-fashioned, but I firmly believe in the traditional medium called books. They’ve been used for millennia, and there is a reason for that. I’m modern enough to admit that you don’t physically have to own a book and there are numerous (digital) alternatives for reading their content, but that’s beyond my point.

Books are a truly valuable source of information, no matter how you consume them. You don’t write a book overnight ([take my word for it](https://gerardvanderput.com/book)). This means the author has put a lot of effort into collecting and writing down that information. The same cannot always be said about content that you find for free online.

Another major benefit of reading a book is that it demands full focus. When you sit down, open a (physical) book, and start reading it, that’s all you do. You cannot read a book and have a conversation with your friend or play with one of your kids at the same time. Well, you could, but then you wouldn’t be working on becoming a competent JavaScript developer at that moment…

Pick up a good book. Turn off your phone, isolate yourself for a few hours, and read it. And yes, they cost money. But it’s an investment. An investment in you, the developer.