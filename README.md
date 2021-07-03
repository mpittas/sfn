# Scottish Financial News

Development of static front-end pages for SFN. We use HTML, CSS and JS. For the CSS we use a compiler SCSS. This is the current and latest list of pages that were developed by me:

- Home
- Categories
- Article Inner
- Events
- Jobs
- Advertisement
- About

We also have the 'HUB' page:
- HUB

---

## Table of Contents:

In this documentation I will describe how specific components work so it can be used as a reference point. This is an explenation of how these following elements function and behave:

- Fixed header on desktop
         - Also, how header (subnav) behaves if user is on pages 'Article inner' and 'Categories'
- Header on mobile devices
- Sticky sidebar in article page
- Truncating text
- Modals & Delaying modals

---

## Usage

### Fixed header on Desktop:

http://mpittas.github.io/sfn/categories
http://mpittas.github.io/sfn/article-inner

The desktop header uses `position: fixed` on desktop. That means we need to add offset from top on the main page container `<main class="wrapper">`. Every page contains this element as it wraps all the content except for `<header>` and `<body>`. 

If you land on pages "Categories" and "Article inner" then the Desktop header will open the sub navigation by default when it loads. It's important to highlight what needs to be added as HTML markup in these specific instances so it works correctly:

1. First, you need to add to the `<body>` class `open-subnav`.Result: `<body class="open-subnav">`. As of now the body element doesn't use any other classes.
2. Import JS file `./js/showSubnav.js` before closing `</body>` tag. Result: `<script src="./js/showSubnav.js"></script>`
