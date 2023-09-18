$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: '<button class="custom-prev slick-arrow" aria-label="Previous" type="button" style="position: absolute; top: 50%; transform: translateY(-50%); left: 10px; z-index: 999;"><i class="fa fa-arrow-left"></i></button>',
    nextArrow: '<button class="custom-next slick-arrow" aria-label="Next" type="button" style="position: absolute; top: 50%; transform: translateY(-50%); right: 10px; z-index: 999;"><i class="fa fa-arrow-right"></i></button>',
  });
});


$(document).ready(function () {
  $('.vertical-carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      vertical: true,
      verticalSwiping: true,
      prevArrow: '<button class="custom-prev slick-arrow" aria-label="Previous" type="button" style="position: absolute; left: 50%; top: 10px; transform: translateX(-50%); z-index: 999;"><i class="fa fa-arrow-up"></i></button>',
      nextArrow: '<button class="custom-next slick-arrow" aria-label="Next" type="button" style="position: absolute; left: 50%; bottom: 10px; transform: translateX(-50%); z-index: 999;"><i class="fa fa-arrow-down"></i></button>',
  });
});
