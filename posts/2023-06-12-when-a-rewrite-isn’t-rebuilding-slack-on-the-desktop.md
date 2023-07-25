---
layout: layouts/post.njk
title: 'When a rewrite isn’t: rebuilding Slack on the desktop'
description: A new version of Slack is rolling out for our desktop customers,
    built from the ground up to be faster, more efficient, and easier to work on.
publishDate: 2023-03-12
category: technology
author: Mark Christian
minRead: 7
featuredImage: https://slack.engineering/wp-content/uploads/sites/7/2020/04/0_cgkWRCMtQXti3jbA-scaled-1.jpeg?resize=1536,1152
featuredVideo: https://www.youtube.com/watch?v=C9XGKY5gvxI
language: en
---

<!-- @format -->

<!--StartFragment-->

[Conventional wisdom](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/) holds that you should never rewrite your code from scratch, and that’s good advice. Time spent rewriting something that already works is time that won’t be spent making our customers working lives simpler, more pleasant, and more productive. And running code knows things: hard-won knowledge gained through billions of hours of cumulative usage and tens of thousands of bug fixes.

Still, software codebases have life spans. The desktop version of Slack is our oldest client, growing out of a period of rapid development and experimentation during the earliest moments of our company. During this period, we were optimizing for product-market fit and in a constant sprint to keep up with our customers as their use — and expectations — of the product grew.

Today, after more than half a decade of hyper-growth, Slack is used by millions of people with larger companies working with more data than we ever could have imagined when we first started. Somewhat predictably, a few internal cracks were starting to show in the desktop client’s foundation. Additionally, the technology landscape had shifted away from the tools we chose in late 2012 (jQuery, Signals, and direct DOM manipulation) and toward a paradigm of composable interfaces and clean application abstractions. Despite [our best efforts to keep things snappy](https://slack.engineering/getting-to-slack-faster-with-incremental-boot), it became clear that some fundamental changes would be required to evolve the desktop app and prepare it for the next wave of product development.

The architecture of the existing desktop app had a number of shortcomings:

1. **Manual DOM updates.** Slack’s original UI was built using HTML templates that needed to be manually rebuilt whenever the underlying data changed, making it a pain to keep the data model and user interface in sync. We wanted to adopt React, a popular JavaScript framework that made this sort of thing more automatic and less prone to potential errors.
2. **Eager data loading.** The data model was “complete”, meaning that each user session started by downloading *everything* relevant to the user. While great in theory, in practice this was prohibitively expensive for large workspaces and meant that we had to do a lot of work to keep data models up-to-date over the course of a user’s session.
3. **Multiple processes for multiple workspaces.** When signed into multiple workspaces, each of those workspaces was in fact running a stand-alone copy of the web client inside a separate Electron process, which meant that Slack used more memory than users expected.

The [first](https://slack.engineering/rebuilding-slacks-emoji-picker-in-react) [two](https://slack.engineering/flannel-an-application-level-edge-cache-to-make-slack-scale) problems were the sort of things that we could incrementally improve over time, but getting multiple workspaces to run within a single Electron process meant changing a fundamental assumption of the original design — that there is only ever a single workspace running at a time. Although we made some [incremental improvements](https://slack.engineering/reducing-slacks-memory-footprint) for folks with lots of idle workspaces, truly solving the multiple process problem meant rewriting Slack’s desktop client from scratch.

## Bit by bit

The [Ship of Theseus](https://en.wikipedia.org/wiki/Ship_of_Theseus) is a thought experiment that considers whether an object that has had each of its pieces replaced one-by-one over time is still the same object when all is said and done. If every piece of wood in a ship has been replaced, is it the same ship? If every piece of JavaScript in an app has been replaced, is it the same app? We sure hoped so, because this seemed like the best course of action.

Our plan was to:

-   keep the existing codebase;
-   create a “modern” section of the codebase that would be future-proof and work the way we wanted it to;
-   modernize the implementation of Slack bit by bit, replacing existing code with modern code incrementally;
-   define rules that would enforce a strict interface between existing and modern code so it would be easy to understand their relationship;
-   and continually ship all of the above with the existing app, replacing older modules with modern implementations that suited our new architecture.

The final step — and the most important one for our purposes — was to create a modern-only version of Slack that would start out incomplete but gradually work its way toward feature completeness as modules and interfaces were modernized.

We’ve been using this modern-only version of the app internally for much of the last year, and it is now rolling out to customers.

## Modern times

The first order of business was to create the modern codebase. Although this was just a new subdirectory in our codebase, it had three important rules enforced by convention and tooling, each of which was intended to address one of our existing app’s shortcomings:

1. All UI components had to be built with React
2. All data access had to assume a lazily loaded and incomplete data model
3. All code had to be “multi-workspace aware”

The first two rules, while time-consuming to fulfill, were relatively straightforward. However, moving to a multi-workspace architecture was quite the undertaking. We couldn’t expect every function call to pass along a workspace ID, and we couldn’t just set a global variable saying which workspace was currently visible since plenty of things continue to happen behind the scenes regardless of which workspace the user is currently looking at.

The key to our approach ended up being [Redux](https://redux.js.org/), which we were already using to manage our data model. With a bit of consideration and the help of the [redux-thunk](https://github.com/reduxjs/redux-thunk) library, we were able to model virtually everything as actions or queries on a Redux store, allowing Redux to provide a convenient abstraction layer around the concept of individual workspaces. Each workspace would get its own Redux store with everything living within it — the workspace’s data, information about the client’s connectivity status, the WebSocket we use for real-time updates — you name it. This abstraction created a conceptual container around each workspace without having to house that container in its own Electron process, which was what the legacy client did.

With this realization, we had our new architecture in place:
