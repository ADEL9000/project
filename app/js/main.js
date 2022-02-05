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