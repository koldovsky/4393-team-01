const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.reservation__submit');
const closeBtns = document.querySelectorAll('.modal__close, .modal__ok');

openBtn.addEventListener('click', () => {
  modal.classList.add('modal--active');
});

closeBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    modal.classList.remove('modal--active');
  })
);
