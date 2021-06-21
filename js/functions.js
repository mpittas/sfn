
// -------------------------------------- FUNCTIONS --------------------------------------
// Footer collapse nav
function footerCollapse() {
  var width = $(document).width();
  
  if (width < 991) {
    $('.sfn-footer__nav-title').click(function() {
      $(this).next().stop().slideToggle();
      $(this).toggleClass('active');
      console.log(this);
    });
  
    $('.sfn-footer__nav-inner').stop().hide();
  } else {
    $('.sfn-footer__nav-inner').stop().show();
  }
};

// Toggle button animation
function toggleAnimation() {
  $(".toggle-button").click(function() {
    var that = $(this);    
    if (that.hasClass("is-open")) {
      that.removeClass("is-open").addClass("is-closed");      
    } else {
      that.removeClass("is-closed").addClass("is-open");      
    }    
  });
}

function stickySidebar() {
  // Sticky elements (Article page)
  $('.sfn-sidebar-fixed').sticky({
    topSpacing: 50,
  });
}

// -------------------------------------- DOCUMENT READY --------------------------------------
jQuery(document).ready(function($){
  toggleAnimation()
  footerCollapse();

  
  // Show modal with delay
  var myModal = new bootstrap.Modal(document.getElementById('subscribeModal'));
  setTimeout(function() {
    myModal.show();
  }, 10000);
});

// -------------------------------------- WINDOW RESIZE --------------------------------------
$(window).resize(function() {
  footerCollapse();
});

//Show Submenu on when hover on main navigation links
var headerLink = $('.sfn-header-nav__inner ul li.dropdown a');
var submenuSection = $('.sfn-header-submenu'); 


if ($(window).width() < 1199) {
  $('.sfn-meta__time span > em').text('min');
}

// -------------------------------------- TRUNCATE CODE --------------------------------------
if ($(window).width() < 960) {
  new Cuttr('.sfn-news-boxes--featured h3', { truncate: 'words', length: 6 });
  new Cuttr('.sfn-news-box--medium-heading h3', { truncate: 'words', length: 6 });
  new Cuttr('.sfn-news-box--big-heading h3', { truncate: 'words', length: 6 });
  new Cuttr('.sfn-news-box--horizontal h3', { truncate: 'words', length: 8 });
  new Cuttr('.sfn-news-box--sidebar-long h3', { truncate: 'words', length: 8 });

  new Cuttr('.sfn-featured-newsbox__title h2', { truncate: 'words', length: 10 });
  new Cuttr('.sfn-featured-newsbox__excerpt', { truncate: 'words', length: 38 });
  
  new Cuttr('.sfn-box-video__content h3', { truncate: 'words', length: 6 });
  
  new Cuttr('.truncate-excerpt', { truncate: 'words', length: 18 });
  new Cuttr('.truncate-excerpt--long', { truncate: 'words', length: 27 });
} else {
  new Cuttr('.sfn-news-boxes--featured .sfn-news-box__title h3', { truncate: 'words', length: 6 });
  new Cuttr('.sfn-news-box--medium-heading .sfn-news-box__title h3', { truncate: 'words', length: 8 });
  new Cuttr('.sfn-news-box--big-heading .sfn-news-box__title h3', { truncate: 'words', length: 8 });
  new Cuttr('.sfn-news-box--horizontal .sfn-news-box__title h3', { truncate: 'words', length: 12 });
  new Cuttr('.sfn-news-box--def-vertical .sfn-news-box__title h3', { truncate: 'words', length: 16 });
  new Cuttr('.sfn-news-box--sidebar-long h3', { truncate: 'words', length: 11 });

  new Cuttr('.sfn-featured-newsbox__title h2', { truncate: 'words', length: 10 });
  new Cuttr('.sfn-featured-newsbox__excerpt', { truncate: 'words', length: 38 });
  
  new Cuttr('.sfn-box-video__content h3', { truncate: 'words', length: 6 });
  
  new Cuttr('.truncate-excerpt', { truncate: 'words', length: 18 });
  new Cuttr('.truncate-excerpt--long', { truncate: 'words', length: 27 });
}