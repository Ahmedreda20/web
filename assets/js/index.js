const btnSearch = document.querySelector('.btn-search');
const searchBox = document.querySelector('.search_box');
const btnMenu = document.querySelector('.btn--menu');
const menuBox = document.querySelector('.md__nav');
const btnTop = document.querySelector('.btn-top');
const btnCart = document.querySelector('.btn_cart');
const cartBox = document.querySelector('.cart_container');
const allItems = document.querySelectorAll('.header__nav .nav_item');
const year = document.querySelector('.year');

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
    if (
      window.location.href.indexOf(item.querySelector('.nav_link').href) !== -1
    ) {
      item.classList.add('active_link');
    }
  });
  year.innerText = new Date().getFullYear();
};

/* ------------------------------- cart container methods --------------------------------- */

const cartContainer = document.querySelector('.cart_container');
const Items = document.querySelectorAll('.cart_item');
var total = cartContainer.querySelector('.cart_footer .price');
Items.forEach((item) => {
  let btnNxt = item.querySelector('.btn_inc');
  let btnPrv = item.querySelector('.btn_dic');
  let inp = item.querySelector('input[type="number"]');
  let btnRm = item.querySelector('.btn__remove');
  let price = item.querySelector('.price');
  let p = 0;

  btnNxt.onclick = () => {
    inp.value++;
    p = Number(price.dataset.price) * Number(inp.value);
    price.innerHTML = p;
    calcTotal();
  };

  btnPrv.onclick = () => {
    if (inp.value > 1 && inp.value !== 0) {
      inp.value--;
      p = Number(price.dataset.price) * Number(inp.value);
      price.innerHTML = p;
      calcTotal();
    } else {
      inp.value = 1;
    }
  };

  inp.onchange = (ev) => {
    let input = ev.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    calcTotal();
  };

  btnRm.onclick = () => {
    item.remove();
    calcTotal();
  };
});

function calcTotal() {
  let cartRows = document.querySelectorAll('.cart_container .cart_item');

  let totalPrice = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.querySelector('.price');
    let quantityElement = cartRow.querySelector('input[type="number"]');

    let price = parseFloat(priceElement.dataset.price);
    let quantity = quantityElement.value;
    totalPrice = totalPrice + price * quantity;
  }
  totalPrice = Math.round(totalPrice * 100) / 100;
  total.innerHTML = totalPrice;
}
