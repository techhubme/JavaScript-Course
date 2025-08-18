'use strict';
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let index = 0;
let slideWidth = 600;
let interval;

// Create dots dynamically
images.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(i) {
  index = (i + images.length) % images.length; // wrap-around
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
  updateDots();
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Navigation buttons
prev.addEventListener('click', () => {
  showSlide(index - 1);
  resetAutoPlay();
});
next.addEventListener('click', () => {
  showSlide(index + 1);
  resetAutoPlay();
});

// Autoplay every 3 sec
function autoPlay() {
  interval = setInterval(() => {
    showSlide(index + 1);
  }, 3000);
}
function resetAutoPlay() {
  clearInterval(interval);
  autoPlay();
}
autoPlay();

// Swipe Support (Touch Devices)
let startX = 0;
slides.addEventListener('touchstart', e => (startX = e.touches[0].clientX));
slides.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    showSlide(index + 1);
    resetAutoPlay();
  }
  if (endX - startX > 50) {
    showSlide(index - 1);
    resetAutoPlay();
  }
});
