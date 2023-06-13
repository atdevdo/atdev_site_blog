<!-- @format -->

# ATDEV - Web Page Clone

ATDEV Blog

## Table of contents

- [Overview](#overview)
  - [The Content](#the-content)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Social Media](#social-media)
- [Folder Structure](#folder-structure)
- [Install dependencies](#install-dependencies)

## Overview

### The Content

In this blog you will see articles of different types, such as:

- Personal Growth
- Health Articles
- Community Articles
- Coding Articles
- Remote Work Articles

### Screenshot

![Home](/assets/images/blog-home.png)

### Links

- Solution URL: [GitHub](https://github.com/AdryAtDev/adrydev_atdev_site_blog)
- Live Site URL: [Netlify](https://melodic-pasca-5d1c5d.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [11ty](https://www.11ty.dev/) - Static Site Generator
- [Decap CMS](https://decapcms.org/docs/intro/) - Headless Netlify CMS

### Useful resources

- [Eleventy](https://www.11ty.dev/docs/) - This amazing static site generator made it possible to build this site.
- [Nunjucks](https://www.11ty.dev/docs/languages/nunjucks/) - This amazing templating language helped me create some navigation functionality and some layouts.
- [Decap Widgets](https://decapcms.org/docs/widgets/) - Decap works with widgets to provide some ui in your cms.
- [Google Fonts](https://fonts.google.com/) - This helped me find a good looking font for this web page.

## Social Media

- Official Web Page - [Official Web Page](https://atdev.do/)
- ATDEV on LinkedIn - [ATDEV](https://www.linkedin.com/company/atdev/about/)
- ATDEV on Twitter - [@AtdevConsulting](https://twitter.com/AtdevConsulting)
- ATDEV on Instagram - [@atdev.do](https://www.instagram.com/atdev.do/)

### Folder Structure

```.
├── _11ty
    ├── collections
    └── filters
├── _data
├── _includes
    ├── components
        ├── blocks
        └── macros
    └── layouts
├── admin
├── assets
    ├── css
    ├── icons
    ├── images
    └── js
├── categories
    ├── community
    ├── growth
    ├── remote work
    └── technology
├── posts
└── uploads
    └── images
```

### Install dependencies

```.
npm install
```

### Working locally

Starts watch tasks to compile when changes detected

```.
npm start
```

### Creating a production build

```.
npm run build
```
