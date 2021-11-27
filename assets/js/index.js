const btnSearch = document.querySelector('.btn-search');
const searchBox = document.querySelector('.search_box');
const btnMenu = document.querySelector('.btn--menu');
const menuBox = document.querySelector('.md__nav');
const btnTop = document.querySelector('.btn-top');
const btnCart = document.querySelector('.btn_cart');
const cartBox = document.querySelector('.cart_container');
const allItems = document.querySelectorAll('.header__nav .nav_item');

// methods

btnTop.onclick = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
btnMenu.onclick = () => menuBox.classList.add('active');
btnSearch.onclick = () => searchBox.classList.add('active');
searchBox.querySelector('.btn__close').onclick = () =>
  searchBox.classList.remove('active');
menuBox.querySelector('.btn__close').onclick = () =>
  menuBox.classList.remove('active');

btnCart.onclick = () => cartBox.classList.add('active_cart');
cartBox.querySelector('.btn__close').onclick = () =>
  cartBox.classList.remove('active_cart');

window.onclick = (e) => {
  if (e.target === cartBox) {
    cartBox.classList.remove('active_cart');
  }
};

window.onload = () => {
  allItems.forEach((item) => {
    // console.log(
    //   window.location.href.indexOf(item.querySelector('.nav_link').href)
    // );
    if (
      window.location.href.indexOf(item.querySelector('.nav_link').href) !== -1
    ) {
      item.classList.add('active_link');
    }
  });
};
