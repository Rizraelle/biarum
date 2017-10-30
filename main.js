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



//Pro slider

$(document).ready(function(){
  $('.pros__slider').slick({
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  });
});


//Remove focus from inputs etc.

$("button").mouseup(function(){
    $(this).blur();
})


//Navbar


function addClass() {
  document.getElementById("elem").classList.add("active");
};

function removeClass() {
  document.getElementById("elem").classList.remove("active");
};

function checkClass() {
  if (document.getElementById("elem").classList.contains("active")) {
    removeClass();
  } else {
    addClass();
  }
};