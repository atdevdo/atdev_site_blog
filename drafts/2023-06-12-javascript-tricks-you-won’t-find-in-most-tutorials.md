---
layout: layouts/post.njk
title: JavaScript Tricks You Won’t Find in Most Tutorials
description: Useful tips for writing more concise and performant JavaScript
publishDate: 2021-07-12
category: technology
author: Bret Cameron
minRead: 9
featuredImage: https://miro.medium.com/v2/resize:fit:2860/format:webp/1*7cRAqUE493wd988uxuTIUg.png
featuredVideo: https://www.youtube.com/watch?v=oRekCcwSeXs
---

<!-- @format -->

<!--StartFragment-->

When I began learning JavaScript, I made a list of every time-saving trick that I found in other people’s code, on code challenge websites, and anywhere *other than* the tutorials I was using.

I have been contributing to this list since then, and in this article, I’ll share 11 hand-picked tips that strike me as particularly clever or useful. This post is intended to be useful for beginners, but I hope even intermediate JavaScript developers will find something new in this list.

While many of these tricks are handy in any context, a few of them may be better suited for code golf than production-level code, where clarity is often more important than concision; I’ll let you be the judge of that!

So, in no particular order, here are 11 neat ways to write more concise and more performant code.

# 1. Filter Unique Values

_ARRAYS_

The `Set` object type was introduced in ES6, and along with `...`, the ‘spread’ operator, we can use it to create a new array with *only* the unique values.

```

```

Before ES6, isolating unique values would involve a lot more code than that!

This trick works for arrays containing primitive types: `undefined`, `null`, `boolean`, `string` and `number` . (If you had an array containing objects, functions or additional arrays, you’d need a different approach!)

# 2. Short-Circuit Evaluation

_CONDITIONALS_

The ternary operator is a quick way to write simple (and sometimes not-so-simple) conditional statements, like these:

```

```

But sometimes even the ternary operator is more complicated than necessary. Instead, we can use the ‘and’ `&&` and ‘or’ `||` logical operators to evaluate certain expressions in an even more concise way. This is often called ‘short-circuiting’ or ‘short-circuit evaluation’.

## How It Works

Let’s say we want to return just one of two or more options.

*Using `&&` will return the first `false` or ‘falsy’ value.* If every operand evaluates to `true` , the last evaluated expression will be returned.

```

```

Using `||` will return the first `true` or ‘truthy’ value. If every operand evaluates to `false` , the last evaluated expression will be returned.

```

```
