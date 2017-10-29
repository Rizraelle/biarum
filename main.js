//Slick-slider lorem1

$(document).ready(function(){
  $('.slider__container').slick({
    autoplay:true,
    autoplaySpeed:3000,
    arrows:false,
    adaptiveHeight:true,
    pauseOnHover:false,
    dots:true,
    appendDots:$('#dots')
  });
});



$(document).ready(function(){
  $('.pros__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});