(function ($) {

  "use strict";

  // Pre Loader for Only Index Page
  $(window).on("load", function () {
    // Keep visible for 2s, then fade out
    setTimeout(function () {
      $(".preloader").fadeOut(600); // 600ms fade animation
    }, 1000);
  });

  // Pre Loader for other pages
  $(window).load(function () {
    $('.preloader1').fadeOut(1000); // set duration in brackets    
  });

  //Navigation Section
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });


  // Owl Carousel
  $('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    loop: true,
    autoplay: true,
  })


  // PARALLAX EFFECT
  $.stellar();


  // SMOOTHSCROLL
  $(function () {
    $('.navbar-default a, #home a, footer a').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });


  // WOW ANIMATION
  new WOW({ mobile: false }).init();

})(jQuery);
