---
layout: layouts/post.njk
title: JavaScript Tricks You Won’t Find in Most Tutorials
description: Useful tips for writing more concise and performant JavaScript
publishDate: 2023-06-12
category: code
author: Bret Cameron
minRead: 9
featuredImage: https://miro.medium.com/v2/resize:fit:2860/format:webp/1*7cRAqUE493wd988uxuTIUg.png
featuredVideo: https://www.youtube.com/watch?v=oRekCcwSeXs
---
<!--StartFragment-->

When I began learning JavaScript, I made a list of every time-saving trick that I found in other people’s code, on code challenge websites, and anywhere *other than* the tutorials I was using.

I have been contributing to this list since then, and in this article, I’ll share 11 hand-picked tips that strike me as particularly clever or useful. This post is intended to be useful for beginners, but I hope even intermediate JavaScript developers will find something new in this list.

While many of these tricks are handy in any context, a few of them may be better suited for code golf than production-level code, where clarity is often more important than concision; I’ll let you be the judge of that!

So, in no particular order, here are 11 neat ways to write more concise and more performant code.

# 1. Filter Unique Values

*ARRAYS*

The `Set` object type was introduced in ES6, and along with `...`, the ‘spread’ operator, we can use it to create a new array with *only* the unique values.

```

```

Before ES6, isolating unique values would involve a lot more code than that!

This trick works for arrays containing primitive types: `undefined`, `null`, `boolean`, `string` and `number` . (If you had an array containing objects, functions or additional arrays, you’d need a different approach!)

# 2. Short-Circuit Evaluation

*CONDITIONALS*

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

## Example 1

Let’s say we want to return the `length` of a variable, but we don’t know the variable type.

We could use an `if/else` statement to check that `foo` is an acceptable type, but this could get pretty longwinded. Short circuit evaluation allows us to do this instead:

```

```

If the variable `foo` is truthy, it will be returned. Otherwise, the `length` of the empty array will be returned: `0` .

## Example 2

Have you ever had problems accessing a nested object property? You might not know if the object or one of the sub-properties exists, and this can cause frustrating errors.

Let’s say we wanted to access a property called `data` within `this.state` , but `data` is undefined until our program has successfully returned a fetch request.

Depending on where we use it, calling `this.state.data` could prevent our app from running. To get around this, we could wrap it in a conditional:

```

```

But that seems pretty repetitive. The ‘or’ operator provides a more concise solution:

```

```

We can’t refactor the code above to use `&&` . The statement `'Fetching Data' && this.state.data` will return `this.state.data` whether it is `undefined` or not. This is because `'Fetching Data'` is ‘truthy’, and so the `&&` will always pass over it when it is listed first.

## A New Proposed Feature: Optional Chaining

There is currently a proposal to allow ‘optional chaining’ when attempting to return a property deep in a tree-like structure. Under the proposal, the question mark symbol `?` could be used to extract a property *only* if it is not `null` .

For example, we could refactor our example above to `this.state.data?.()` , thus only returning `data` if it is not `null` .

Or, if we were mainly concerned about whether `state` was defined or not, we could return `this.state?.data` .

The proposal is currently at Stage 1, as an experimental feature. You can read about it [here](https://github.com/tc39/proposal-optional-chaining), and you can use in your JavaScript now via Babel, by adding [@babel/plugin-proposal-optional-chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining) to your `.babelrc` file.

# 3. Convert to Boolean

*TYPE CONVERSION*

Besides the regular boolean values `true` and `false` , JavaScript also treats all other values as either ‘truthy’ or ‘falsy’.

Unless otherwise defined, all values in JavaScript are ‘truthy’ with the exception of `0`, `""`, `null`, `undefined`, `NaN` and of course `false` , which are ‘falsy’.

We can easily switch between true and false by using the negative operator `!` , which will also convert the type to `"boolean"` .

```

```

This kind of type conversion can be handy in conditional statements, although the only reason you’d choose to define `false` as `!1` is if you were playing code golf!

# 4. Convert to String

*TYPE CONVERSION*

To quickly convert a number to a string, we can use the concatenation operator `+` followed by an empty set of quotation marks `""` .

```

```

# 5. Convert to Number

*TYPE CONVERSION*

The opposite can be quickly achieved using the addition operator `+` .

```

```

This may also be used to convert booleans to numbers, as below:

```

```

There may be contexts where the `+` will be interpreted as the concatenation operator rather than the addition operator. When that happens (and you want to return an integer, not a float) you can instead use two tildes: `~~` .

A tilde, known as the ‘bitwise NOT operator’, is an operator equivalent to`-n — 1` . So, for example, `~15` is equal to `-16` .

Using two tildes in a row effectively negates the operation, because `— ( — n — 1) — 1 = n + 1 — 1 = n` . In other words, `~ — 16` equals `15` .

```

```

Though I can’t think of many use-cases, the bitwise NOT operator can also be used on booleans: `~true = -2` and `~false = -1` .

# 6. Quick Powers

*OPERATIONS*

Since ES7, it has been possible to use the exponentiation operator `**` as a shorthand for powers, which is faster than writing `Math.pow(2, 3)` . This is straightforward stuff, but it makes the list because not many tutorials have been updated to include this operator!

```

```

This shouldn’t be confused with the `^` symbol, commonly used to represent exponents, but which in JavaScript is the bitwise XOR operator.

Before ES7, shorthand existed only for powers with base 2, using the bitwise left shift operator `<<` :

```

```

For example, `2 << 3 = 16` is equivalent to `2 ** 4 = 16` .

# 7. Quick Float to Integer

*OPERATIONS / TYPE CONVERSION*

If you want to convert a float to an integer, you can use `Math.floor()` , `Math.ceil()` or `Math.round()` . But there is also a faster way to truncate a float to an integer using `|`, the bitwise OR operator.

```

```

The behaviour of `|` varies depending on whether you’re dealing with positive or negative numbers, so it’s best only to use this shortcut if you’re sure.

If `n` is positive, `n | 0` effectively rounds down. If `n` is negative, it effectively rounds up. To put it more accurately, this operation removes whatever comes after the decimal point, truncating a float to an integer.

You can get the same rounding effect by using `~~`, as above, and in fact *any* bitwise operator would force a float to an integer. The reasons these particular operations work is that — once forced to an integer — the value is left unchanged.

## Remove Final Digits

The bitwise OR operator can also be used to remove any amount of digits from the end of an integer. This means we don’t have to use code like this to convert between types:

```

```

Instead, the bitwise OR operator allows us to write:

```

```

# 8. Automatic Binding in Classes

*CLASSES*

We can use ES6 arrow notation in class methods, and by doing so binding is implied. This will often save several lines of code in our class constructor, and we can happily say goodbye to repetitive expressions such as `this.myMethod = this.myMethod.bind(this)` !

```

```

# 9. Truncate an Array

*ARRAYS*

If you want to remove values from the end of an array destructively, there’s are faster alternatives than using `splice()` .

For example, if you know the size of your original array, you can re-define its length property, like so:

```

```

This is a particularly concise solution. However, I have found the run-time of the `slice()` method to be even faster. If speed is your main goal, consider using something like this:

```

```

# 10. Get the Last Item(s) in an Array

*ARRAYS*

The array method `slice()` can take negative integers, and if provided it will take values from the end of the array rather than the beginning.

```

```

# 11. Format JSON Code

*JSON*

Lastly, you may have used `JSON.stringify` before, but did you realise it can also help indent your JSON for you?

The `stringify()` method takes two optional parameters: a `replacer` function, which you can use to filter the JSON that is displayed, and a `space` value.

The `space` value takes an integer for the number of spaces you want or a string (such as `'\t'` to insert tabs), and it can make it a lot easier to read fetched JSON data.

```

```

Overall, I hope you found these tips as useful as I did when I first discovered them.

Got any JavaScript tricks of your own? I’d love to read them in the comments below!

# 12. \[Deprecated] Cache Array Length in Loops

*LOOPS*

In the original version of this article, I shared a tip to cache array length in `for` loops. However, if it is a read-only loop, modern JavaScript engines deal with this at the point of compilation. It is no longer necessary unless the length of the array changes (and, if that is the case, you’ll probably want it to be recalculated with every iteration anyway).

Thanks to several commenters who pointed this out. If you’d like to find more, check out [this question on StackOverflow](https://stackoverflow.com/questions/5752906/is-reading-the-length-property-of-an-array-really-that-expensive-an-operation).

For those who are interested, there used to be some performance incentive to writing `for (let i = 0, len = array.length; i < len; i++)` rather than `for (let i = 0; i < array.length; i++)` . This is no longer the case!

<!--EndFragment-->