(function ($) {
    "use strict";

    /**---   01. preloader   ---**/

  $(window).on('load', function(){
    $(".preloader").fadeOut(1000);
  });

  /**---   02. Page Sroll   ---**/

  $(window).on('scroll', function(){
    if($(this).scrollTop() > 1000){
      $('#scroll').addClass('scroll-show');
    }
    else{
      $('#scroll').removeClass('scroll-show');
    }
    
    });
    
    $('#scroll').on('click', function(){
      $('html, body').animate({
        scrollTop: 0
      }, 5000)
    });

  /**---   03. Sticky Menu   ---**/

  $(window).load(function(){
    $(window).on('scroll', function(){
      if($(window).scrollTop() > 50){
        $('.main-header').addClass('sticky');
        $('.top-header').addClass('sticky-top');
      }
      else{
        $('.main-header').removeClass('sticky');
        $('.top-header').removeClass('sticky-top');
      }
  
    })
  });


/* Mobile menu active */

  jQuery('#mobilemenu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: '1199'
  });
  /* Side btn */
  $('.info-bar-toggle').on('click',function(){
      $('.extra-info').addClass('info-open');
  })

  $('.close-icon').on('click',function(){
      $('.extra-info').removeClass('info-open');
  })

  


/*  slider */
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
			arrows: true,
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();


/* feature active */

$('.testimonial-active').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  
// Testimonial two active
$('.testimonial-two-active').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });

  // Testimonial two active
  $('.brand-active').slick({
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });



 // Testimonial two active
$('.product-active').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  }); 

 /*  testimonila four css */

$('.testimonial-item-active').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.testimonial-nav'
});


$('.testimonial-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testimonial-item-active',
  dots: false,
  prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  centerMode: true,
  focusOnSelect: true,
  centerPadding:0
});

/* counter active */
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

/* wow js */
new WOW().init();

$('select').niceSelect();

/**---   14. Isotope grid active   ---**/

// init Isotope
var grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-item'
    }
  })

// filter items on button click
$('.product-nav-button').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    grid.isotope({ filter: filterValue });
  });
  
    //for menu active class
    $('.product-nav-button button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });










})(jQuery);	    