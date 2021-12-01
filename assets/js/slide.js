$(document).ready(() => {
  $('.slide_container').slick({
    infinite: true,
    loop: true,
    dots: true,
    arrows: true,
    autoplay: true,
    rtl: true,

    prevArrow: `<i class="fas fa-angle-left slick-prev"></i>`,
    nextArrow: `<i class="fas fa-angle-right slick-next"></i>`,
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

const slideItems = document.querySelectorAll('.slide_container .slide_item');
const preview = document.querySelector('.preview_container');

slideItems.forEach((slide) => {
  slide.ondblclick = () => {
    preview.classList.add('active_preview');
    preview.querySelector('.slide_item img').src =
      slide.querySelector('img').src;
  };
});

preview.querySelector('.btn_close').onclick = () =>
  preview.classList.remove('active_preview');
