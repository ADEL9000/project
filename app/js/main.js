$(function(){

  $('.top-slider__items').slick({
    arrows: false,
    dots: true,
    fade: true
  });

  $('.filters-price__slider').ionRangeSlider({
    onStart: function (data) {
      $('.filters-price__prices-from').text(data.from);
      $('.filters-price__prices-to').text(data.to);
    },
    onChange: function (data) {
      $('.filters-price__prices-from').text(data.from);
      $('.filters-price__prices-to').text(data.to);
    },
  });

  $('.recent__rating').rateYo({
    readOnly: true,
    spacing: "8px",
    starWidth: "11px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    "starSvg":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>'
  });

  $('.rating').rateYo({
    readOnly: true,
    spacing: "12px",
    starWidth: "18px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    "starSvg":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>'
  });

  $('.slider-min').slick({
    vertical: true,
    slidesToShow: 3,
    focusOnSelect: true,
    asNavFor: '.slider-big',
  });
  $('.slider-big').slick({
    fade: true,
    arrows: false,
    asNavFor: '.slider-min',
  });

  $('.details__form-input').styler()

  $('.tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.tabs__top-item').removeClass('tabs__top-item--active');
    $(this).addClass('tabs__top-item--active');
    $('.tabs__content-item').removeClass('tabs__content-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active');
  });

  $('.related-products__items').slick({
    slidesToShow: 4,
    infinite: false,
    prevArrow: '<button type="button" class="related-products__arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="9px"><path fill-rule="evenodd"  fill="rgb(163, 187, 200)" d="M21.704,3.526 L21.712,3.529 L4.756,3.529 L4.856,0.670 C4.910,0.616 4.940,0.542 4.940,0.465 C4.940,0.388 4.910,0.315 4.856,0.261 L4.684,0.087 C4.629,0.033 4.557,0.003 4.480,0.003 C4.403,0.003 4.331,0.033 4.276,0.087 L0.084,4.298 C0.030,4.353 -0.000,4.426 -0.000,4.503 C-0.000,4.580 0.030,4.653 0.084,4.707 L4.276,8.920 C4.331,8.973 4.403,9.003 4.480,9.003 C4.557,9.003 4.629,8.973 4.684,8.920 L4.856,8.746 C4.910,8.692 4.940,8.619 4.940,8.542 C4.940,8.465 4.910,8.396 4.856,8.342 L4.743,5.478 L21.708,5.478 C21.867,5.478 22.000,5.340 22.000,5.181 L22.000,3.812 C22.000,3.653 21.863,3.526 21.704,3.526 Z"/></svg></button>',
    nextArrow: '<button type="button" class="related-products__arrow-next"><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="9px"><path fill-rule="evenodd"  fill="rgb(163, 187, 200)" d="M0.296,5.473 L0.288,5.471 L17.244,5.471 L17.144,8.329 C17.089,8.384 17.060,8.458 17.060,8.534 C17.060,8.612 17.089,8.684 17.144,8.739 L17.316,8.912 C17.371,8.967 17.443,8.996 17.520,8.996 C17.597,8.996 17.669,8.967 17.724,8.913 L21.916,4.701 C21.970,4.647 22.000,4.573 22.000,4.497 C22.000,4.420 21.970,4.347 21.916,4.293 L17.724,0.080 C17.669,0.026 17.597,-0.003 17.520,-0.003 C17.443,-0.003 17.371,0.026 17.316,0.080 L17.144,0.254 C17.089,0.307 17.060,0.380 17.060,0.458 C17.060,0.535 17.089,0.604 17.144,0.657 L17.257,3.522 L0.292,3.522 C0.133,3.522 -0.000,3.659 -0.000,3.818 L-0.000,5.188 C-0.000,5.347 0.137,5.473 0.296,5.473 Z"/></svg></button>'
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});