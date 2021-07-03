# Scottish Financial News

Development of static front-end pages for SFN. We use HTML, CSS and JS. For the CSS we use a compiler called SCSS. This is the current and latest list of pages that were developed by me:

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

In this documentation I will describe how specific components work so it can be used as a reference point. This is an explanation of how these following elements function and behave:

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

If the user lands on pages "Categories" and "Article inner" then the Desktop header will open the sub navigation by default when it loads. It's important to highlight what needs to be added as HTML markup in these specific instances so it works correctly:

1. First, add to the `<body>` class `open-subnav`. Result: `<body class="open-subnav">`. As of now the body element doesn't use any other classes.
2. Import JS file `./js/showSubnav.js` before closing `</body>` tag. Result: `<script src="./js/showSubnav.js"></script>`

---

## Header on mobile devices

On mobile devices we create a separate container for the mobile header design. It's called `.sfn-header-slide` as it slides from the side. We use our custom JS to make the functionality. 

``` Javascript
// OPEN MOBILE NAV
function openMobileHeader() {
  $(".toggle-button").click(function() {
    $('.sfn-toggle-button').click(function(){
      $('body').addClass('sfn-header-slide--open');
    });
  });
}

// CLOSE MOBILE NAV
function closeMobileHeader() {
  $('.sfn-header-slide__close').click(function() {
    $('body').removeClass('sfn-header-slide--open');
  });
}
```

That is pretty much all the JS that we use to achieve the result. Maybe we can implement a touch interaction where the navigation can be closed by sliding it.

One issue I faced was the dropdown functionality on main navigation for mobile. We use bootstrap dropdown data-attributes and this makes the parent link no to go to the page we have specified in the `<a href="categories.html"></a>` tag. I came up with a solution where we add the link and the chevron icon (dropdown icon) separately. The HTML looksl ike this: 

``` HTML
<div class="sfn-header-slide__nav">
  <nav class="navbar navbar-collapse collapse show" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto">
           <!-- ATTENTION HERE -->
          <li class="dropdown">
              <a class=" dropdown-toggle" href="categories.html">
                  News
              </a>
              <span class="dropdown-toggle--close" id="navNews" role="button" data-bs-toggle="dropdown" aria-expanded="true"></span>
              <ul class="dropdown-menu" aria-labelledby="navNews" data-bs-popper="none">
                  <li><a href="#">Latest</a></li>
                  <li><a href="#">Appointments</a></li>
                  <li><a href="#">Legislation</a></li>
                  <li><a href="#">Courts</a></li>
                  <li><a href="#">Financial Regulatory</a></li>
                  <li><a href="#">And Finally</a></li>
              </ul>
          </li>
        <!-- / ATTENTION HERE -->
        
        <li>...</li>
        <li>...</li>
        <li>...</li>
    </ul>
  </nav>
</div>

```
---

## Sticky sidebar

This effect can be seen in this page mpittas.github.io/sfn/article-inner. This sticky effect on scroll we achieve by adding a small library called StickyJS - http://stickyjs.com/. 

We add the script link before the closing `</body>` tag only on the 'Article inner' page as we use this functionality only here.
We call the plugin the same page in a `<script>` tag before closing `</body>`. There is a function that we call to offset the left sidebar with meta information to match the heading height as we don't want to truncate this part.

Example:


``` Javascript
<script>
        function sidebarOffset() {
            // Take article heading's height and apply it as an offset to left sidebar
            var articleHeadingHeight = $('.sfn-article__heading > h1').height();
            $('.sfn-article-meta').css({'paddingTop': articleHeadingHeight + 50});
        }

        function stickySidebar() {
            // Sticky elements (Article page)
            $('.sfn-sidebar-fixed').sticky({
                topSpacing: 180,
            });
        }

        jQuery(document).ready(function($){
            if ($(window).width() > 991) {
                sidebarOffset();
                stickySidebar();
            }
        });

        jQuery(window).resize(function($) {
            if ($(window).width() > 991) {
                sidebarOffset();
                stickySidebar();
            }
        });
    </script>
``` 

---

## Truncating text

The truncating (giving max number of words count and the adding dots at the end) of the text is done by using a plugin called Cuttr: https://cuttr.kulahs.de/. We add it as a script tag before the closing `</body>` tag in every single file. Additionally we add a local file as a script, again before the closing body tag, called `truncateHeading.js` where we call the functions.

---

## Modals and delaying modals

For the modals (pop ups) we use the Bootstrap 5 functionality by passing data-attributes on the corresponding components. Currently there are two modals that we use: Subscribe and Video modals.

The delaying of the modals when page loads is achieved with a function called `delayModalOnPageLoad();`

``` Javascript
function delayModalOnPageLoad() {
  // Show modal with delay
  var myModal = new bootstrap.Modal(document.getElementById('subscribeModal'));
  setTimeout(function() {
    myModal.show();
  }, 10000);
}
```

It's important to note that this is placed in the `functions.js` and it fires on every page after a 10 seconds delay. If we want to add it on a specific page then it needs to be imported as a script tag in the said page.

---

## Contributing

The "Issues" and "Pull Requests" tabs are the place to go if any changes are to be committed or discussed. Feel free to ping me so I can get notifications.

--- 

## License

Uses "MIT License"
https://github.com/mpittas/sfn/blob/main/LICENSE
