(function ($) {
  "use strict";

  // preloader
  $(window).on('load', function () {
    $('.preloader').delay(300).fadeOut(500);
  });

  // hambugar menu
  $(".hambugar-icon").on('click', function () {
    $('.offcanvas-menu,.offcanvas-menu-overlay').addClass("active");
  });

  $(".menu-close i,.offcanvas-menu-overlay,.offcanvas-cell li a").on('click', function () {
    $('.offcanvas-menu,.offcanvas-menu-overlay').removeClass("active");
  });

  // TOP Menu Sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
      $("#sticky-header").removeClass("sticky");
    } else {
      $("#sticky-header").addClass("sticky");
    }
  });

  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });

  /* magnificPopup img view */
  $('.popup-image').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  // counter 
  $('.counter').counterUp({
    delay: 10,
    time: 10000
  });

  // scrollIt for smoth scroll
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0           // offste (in px) for fixed top navigation
  });

  // scrollup bottom to top
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


  // Typed js for typing
  var typed3 = new Typed('.typed', {
    strings: ['web designer', 'web developer', 'photographer'],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true
  });

  /* magnificPopup video view */
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });

})(jQuery);	