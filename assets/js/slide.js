$(document).ready(() => {
  $('.slide_container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    loop: true,
    dots: false,
    arrows: false,
    autoplay: true,
    rtl: true,
    centerMode: true,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  });
});
