const tabs = document.querySelectorAll('.form-box');
const steps = document.querySelectorAll('.stepper_item');
const btn = document.querySelector('.btn_form');
const form = document.querySelector('form');
var current = 0;
showCurrentTab(current);
btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (1 && !validate()) return false;
  tabs[current].classList.remove('active');
  current += 1;
  if (current >= tabs.length) {
    form.submit();
    return false;
  }
  showCurrentTab(current);
  window.scrollTo({
    top: form.offsetTop,
    left: 0,
    behavior: 'smooth',
  });
});

function validate() {
  var inputs = tabs[current].querySelectorAll('.form-control');
  var active = true;
  for (let inp = 0; inp < inputs.length; inp++) {
    const elem = inputs[inp];

    if (elem.value === '') {
      elem.classList.add('empty');
      active = false;
    } else {
      elem.classList.remove('empty');
    }
  }
  if (active) {
    steps[current].classList.add('active_step');
  }
  return active;
}

function showCurrentTab(i) {
  tabs[i].classList.add('active');
  if (i == tabs.length - 1) {
    btn.innerHTML = 'ارسال';
  } else {
    btn.innerHTML = 'التالي';
  }
}
