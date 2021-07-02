// ------------------------------- FUNCTIONS ------------------------------- //

//  Hide subnav if you hover on a link that doesn't contain '.dropdown'
function headerNavNoDropdown() {
  var link= $('.sfn-header-nav__inner > ul > li:not(".dropdown")');

  link.on({
    mouseenter: function () {
      $('body').removeClass('open-subnav');
    },
    mouseleave: function () {
      $('body').addClass('open-subnav');
    }
  });
}

// Open subnav if user is on top of page
function toggleSubnavOnScroll() {
  if($(window).scrollTop() == 0 ) {
    $('body').addClass('open-subnav');
  } else {
    $('body').removeClass('open-subnav');
  }
}

// ------------------------------- DOCUMENT READY ------------------------------- //
jQuery(document).ready(function($){
  // headerNavNoDropdown();
});

// ------------------------------- WINDOW SCROLL ------------------------------- //\
$(window).scroll(function() {
  toggleSubnavOnScroll();
});