
// -------------------------------------- FUNCTIONS -------------------------------------- //
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

    // Toggle mobile menu
    $('.sfn-toggle-button').click(function(){
      $('.sfn-header-slide').addClass('open');
      console.log('i clicked');
    });
  });
}

// Close mobile header when clicked on closing icon
function closeMobileHeader() {
  $('.sfn-header-slide__close').click(function() {
    $('.sfn-header-slide').removeClass('open');
  });
}

// Sticke sidebar
function stickySidebar() {
  // Sticky elements (Article page)
  $('.sfn-sidebar-fixed').sticky({
    topSpacing: 180,
  });
}

// Take article heading height and apply it as an offset to left sidebar
function articleLeftSidebarOffset() {
  var articleHeadingHeight = $('.sfn-article__heading > h1').height();
  console.log(articleHeadingHeight);
  $('.sfn-article-meta').css({'paddingTop': articleHeadingHeight + 50});
}

function delayModalOnPageLoad() {
  // Show modal with delay
  var myModal = new bootstrap.Modal(document.getElementById('subscribeModal'));
  setTimeout(function() {
    // myModal.show();
  }, 10000);
}

function shortenMetaString() {
  if ($(window).width() < 1199) {
    // Update (Shorten) meta string so it doesn't fall it  doesn't breal the design
    $('.sfn-meta__time span > em').text('min');
  }
}

// -------------------------------------- DOCUMENT READY -------------------------------------- //
jQuery(document).ready(function($){
  toggleAnimation();

  footerCollapse();

  stickySidebar()

  articleLeftSidebarOffset();

  delayModalOnPageLoad();

  shortenMetaString()
});

// -------------------------------------- WINDOW RESIZE -------------------------------------- //
$(window).resize(function() {
  footerCollapse();
  shortenMetaString();
});
