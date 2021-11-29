const item = document.querySelector('.product_box .product_qty');
let btnNxt = item.querySelector('.btn_inc');
let btnPrv = item.querySelector('.btn_dic');
let inp = item.querySelector('input[type="number"]');
let p = 0;

btnNxt.onclick = () => {
  inp.value++;
};

btnPrv.onclick = () => {
  if (inp.value > 1 && inp.value !== 0) {
    inp.value--;
  } else {
    inp.value = 1;
  }
};

inp.onchange = (ev) => {
  let input = ev.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
};
