'use strict';

const MODAL = document.querySelector('.modal');
const OVERLAY = document.querySelector('.overlay');
const CLOSE_MODALS_BTN = document.querySelector('.close-modal');
const SHOW_MODALS_BTNS = document.querySelectorAll('.show-modal');

const CLOSE_MODAL = function closeModal() {
  MODAL.classList.add('hidden');
  OVERLAY.classList.add('hidden');
};

const SHOW_MODAL = function showModal() {
  MODAL.classList.remove('hidden');
  OVERLAY.classList.remove('hidden');
};

for (let i = 0; i < SHOW_MODALS_BTNS.length; i++) {
  SHOW_MODALS_BTNS[i].addEventListener('click', SHOW_MODAL);
}

CLOSE_MODALS_BTN.addEventListener('click', CLOSE_MODAL);
OVERLAY.addEventListener('click', CLOSE_MODAL);

document.addEventListener('keydown', function (e) {
  let key = e.key;
  if (key === 'Escape') {
    if (!MODAL.classList.contains('hidden')) {
      CLOSE_MODAL();
    }
  }
});
