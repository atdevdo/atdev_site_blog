---
layout: layouts/post.njk
title: I don't know how CPUs work so I simulated one in code
description: A few months ago it dawned on me that I didn’t really understand
    how computers work under the hood ...
publishDate: 2011-07-13
category: technology
author: No Author
minRead: 10
featuredImage: /uploads/images/logo.png
featuredVideo: https://www.youtube.com/watch?v=jx-w2o-Lj8g
---

<!-- @format -->

<!--StartFragment-->

A few months ago it dawned on me that I didn’t really understand how computers work under the hood. I still don’t understand how *modern* computers work.

However, after making my way through *[But How Do It Know?](http://buthowdoitknow.com/)* by J. Clark Scott, a book which describes the bits of a simple 8-bit computer from the NAND gates, through to the registers, RAM, bits of the CPU, ALU and I/O, I got a hankering to implement it in code.

While I’m not *that* interested in the physics of the circuitry, the book just about skims the surface of those waters and gives a neat overview of the wiring and how bits move around the system without the requisite electrical engineering knowledge. For me though I can’t get comfortable with book descriptions, I have to see things in action and learn from my inevitable mistakes, which led me to chart a course on the rough seas of writing a circuit in code and getting a bit weepy about it.

The fruits of my voyage can be seen in [simple-computer](https://github.com/djhworld/simple-computer); a simple computer that’s simple and computes things.

\
Example programs

It is quite a neat little thing, the CPU code is implemented [as a horrific splurge of gates turning on and off](https://github.com/djhworld/simple-computer/blob/master/cpu/cpu.go#L763) but it works, I’ve [unit tested it](https://github.com/djhworld/simple-computer/blob/master/cpu/cpu_test.go), and we all know unit tests are irrefutable proof that something works.

It handles [keyboard inputs](https://github.com/djhworld/simple-computer/blob/master/io/keyboard.go#L20), and renders text [to a display](https://github.com/djhworld/simple-computer/blob/master/io/display.go#L13) using a painstakingly crafted set of glyphs for a professional font I’ve named “Daniel Code Pro”. The only cheat bit is to get the keyboard input and display output working I had to hook up go channels to speak to the outside world via [GLFW](https://github.com/djhworld/simple-computer/blob/master/cmd/simulator/glfw_io.go), but the rest of it is a simulated circuit.

I even wrote a [crude assembler](https://github.com/djhworld/simple-computer/blob/master/asm/assembler.go) which was eye opening to say the least. It’s not perfect. Actually it’s a bit crap, but it highlighted to me the problems that other people have already solved many, many years ago and I think I’m a better person for it. Or worse, depending who you ask.

## But why you do that?

> _“I’ve seen thirteen year old children do this in Minecraft, come back to me when you’ve built a REAL CPU out of telegraph relays”_

My mental model of computing is stuck in beginner computer science textbooks, and the CPU that powers the [gameboy emulator I wrote back in 2013](https://github.com/djhworld/gomeboycolor) is really nothing like the CPUs that are running today. Even saying that, the emulator is just a state machine, it doesn’t describe the stuff at the logic gate level. You can implement most of it using just a `switch` statement and storing the state of the registers.

So I’m trying to get a better understanding of this stuff because I don’t know what L1/L2 caches are, I don’t know what pipelining means, I’m not entirely sure I understand the Meltdown and Spectre vulnerability papers. Someone told me they were optimising their code to make use of CPU caches, I don’t know how to verify that other than taking their word for it. I’m not really sure what all the x86 instructions mean. I don’t understand how people off-load work to a GPU or TPU. I don’t know what a TPU is. I don’t know how to make use of SIMD instructions.

But all that is built on a foundation of knowledge you need to earn your stripes for, so I ain’t gonna get there without reading the map first. Which means getting back to basics and getting my hands dirty with something simple. The “Scott Computer” described in the book is simple. That’s the reason.

## Great Scott! It’s alive!

The Scott computer is an 8-bit processor attached to 256 bytes of RAM, all connected via an 8-bit system bus. It has 4 general purpose registers and can execute [17 machine instructions](https://github.com/djhworld/simple-computer#instructions). Someone built a visual simulator [for the web here](http://www.buthowdoitknow.com/but_how_do_it_know_cpu_model.html), which is really cool, I dread to think how long it took to track all the wiring states!

[![](https://djhworld.github.io/img/simple-computer/scott-cpu.png 'The Scott CPU')](https://djhworld.github.io/img/simple-computer/scott-cpu.png)

\
A diagram outlining all the components that make up the Scott CPU\
Copyright © 2009 - 2016 by Siegbert Filbinger and John Clark Scott.

The book takes you on a journey from the humble NAND gate, onto a Bit of memory, onto a register and then keeps layering on components until you end up with something resembling the above. I really recommend reading it, even if you are already familiar with the concepts because it’s quite a good overview. I don’t recommend the Kindle version though because the diagrams are sometimes hard to zoom in and decipher on a screen. A perennial problem for the Kindle in my experience.

The only thing that’s different about my computer is I upgraded it to 16-bit to have more memory to play with, as storing even just the glyphs for the [ASCII table](https://github.com/djhworld/simple-computer/blob/master/_programs/ascii.asm#L27) would have dwarfed most of the 8-bit machine described in the book, with not much room left for useful code.

## My development journey

During development it really was just a case of reading the text, scouring the diagrams and then attempting to translate that using a general purpose programming language code and definitely *not* using something that’s designed for integrated circuit development. The reason why I wrote it in Go, is well, I know a bit of Go. Naysayers might chime in and say, you blithering idiot! I can’t believe you didn’t spend all your time learning [VHDL](https://en.wikipedia.org/wiki/VHDL) or [Verilog](https://en.wikipedia.org/wiki/Verilog) or [LogSim](http://www.cburch.com/logisim/) or whatever but I’d already written my bits and bytes and NANDs by that point, I was in too deep. Maybe I’ll learn them next and weep about my time wasted, but that’s my cross to bear.
