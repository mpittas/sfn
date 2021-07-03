
// ------------------------------- FUNCTIONS ------------------------------- //
//+++++ Footer collapse nav +++++
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

// OPEN MOBILE NAV
function openMobileHeader() {
  $(".toggle-button").click(function() {
    // Toggle mobile menu
    $('.sfn-toggle-button').click(function(){
      $('body').addClass('sfn-header-slide--open');
    });
  });
}

// OPEN MOBILE NAV
function closeMobileHeader() {
  $('.sfn-header-slide__close').click(function() {
    $('body').removeClass('sfn-header-slide--open');
  });
}

// +++++ Take article heading height and apply it as an offset to left sidebar +++++
function articleLeftSidebarOffset() {
  var articleHeadingHeight = $('.sfn-article__heading > h1').height();
  $('.sfn-article-meta').css({'paddingTop': articleHeadingHeight + 50});
}


// +++++ Delay subscribe modal on page load +++++
function delayModalOnPageLoad() {
  // Show modal with delay
  var myModal = new bootstrap.Modal(document.getElementById('subscribeModal'));
  setTimeout(function() {
    // myModal.show();
  }, 10000);
}

// +++++ Shorten meta string on smaller devices +++++
function shortenMetaString() {
  if ($(window).width() < 1199) {
    // Update (Shorten) meta string so it doesn't fall it  doesn't breal the design
    $('.sfn-meta__time span > em').text('min');
  }
}

function dropdownParentNavClickable() {
  $('.sfn-header-slide__nav .dropdown-toggle').click(function() {
    location.href = this.href;
});
}

// ------------------------------- DOCUMENT READY ------------------------------- //
jQuery(document).ready(function($){
  openMobileHeader();
  closeMobileHeader();
  footerCollapse();
  delayModalOnPageLoad();
  shortenMetaString();
  dropdownParentNavClickable();
  
});

// ------------------------------- WINDOW RESIZE ------------------------------- //
$(window).resize(function() {
  footerCollapse();
  shortenMetaString();
});


//Main header nav
// hover on <li> that doesn't have class 'dropdown' remove class 'open-subnav' from <body>

