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

jQuery(document).ready(function($){
  // headerNavNoDropdown();
});


// Open menu if scrolltTop is 0 (user is on top of page)
var distance = $('body').offset().top,
    $window = $(window);

$window.scroll(function() {
  if($window.scrollTop() == 0 ) {
      $('body').addClass('open-subnav');
    } else {
      $('body').removeClass('open-subnav');
  }
});