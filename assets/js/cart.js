const cartDetailsBox = document.querySelector('.cart_details--box');
const cartItems = cartDetailsBox.querySelectorAll('.cart__item');

// var total = cartDetailsBox.querySelector('.cart_footer .price');

cartItems.forEach((item) => {
  let btnNxt = item.querySelector('.btn_inc');
  let btnPrv = item.querySelector('.btn_dic');
  let inp = item.querySelector('input[type="number"]');
  let btnRm = item.querySelector('.btn_remove');
  let price = item.querySelector('.price');
  let p = 0;

  btnNxt.onclick = () => {
    inp.value++;
    p = Number(price.dataset.price) * Number(inp.value);
    price.innerHTML = p;
    handlePriceCartInsideTotalCart(item.dataset.id, 'add');
    item.querySelector('.qty').innerHTML = `${inp.value} ×`;
  };

  btnPrv.onclick = () => {
    if (inp.value > 1 && inp.value !== 0) {
      inp.value--;
      p = Number(price.dataset.price) * Number(inp.value);
      price.innerHTML = p;
      handlePriceCartInsideTotalCart(item.dataset.id, 'add');
      item.querySelector('.qty').innerHTML = `${inp.value} ×`;
    } else {
      inp.value = 1;
      item.querySelector('.qty').innerHTML = `${inp.value} ×`;
    }
  };

  inp.onchange = (ev) => {
    let input = ev.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    handlePriceCartInsideTotalCart(item.dataset.id, 'add');
    item.querySelector('.qty').innerHTML = `${input.value} ×`;
  };

  btnRm.onclick = () => {
    item.remove();
    handlePriceCartInsideTotalCart(item.dataset.id, 'remove');
  };
});

// if necessary
function calcCartTotal() {
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

function handlePriceCartInsideTotalCart(id, type) {
  let items = document.querySelectorAll('.cart_details--total .cart__item');
  items.forEach((item) => {
    if (item.dataset.id === id) {
      if (type === 'remove') {
        item.remove();
      } else if (type === 'add') {
        let singleItem = document.querySelector(
          `.cart_details--box .cart__item[data-id="${id}"]`
        );

        if (singleItem) {
          item.querySelector('.price').innerHTML =
            singleItem.querySelector('.price').innerHTML;
        }
      }
    }
  });
}
