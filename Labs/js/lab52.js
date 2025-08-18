'use strict';
const images = document.querySelectorAll('img');

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // Replace placeholder with real src
        obs.unobserve(img); // Stop observing once loaded
      }
    });
  },
  { threshold: 0.1 }
);

images.forEach(img => observer.observe(img));

const container = document.getElementById('container');
let count = 0;

// Function to add items
function addItems(n = 5) {
  for (let i = 0; i < n; i++) {
    count++;
    const div = document.createElement('div');
    div.className = 'item';
    div.textContent = 'Item ' + count;
    container.appendChild(div);
  }
}

// Load initial items
addItems();

// Observe sentinel (bottom loader)
const sentinel = document.getElementById('sentinel');

const observer2 = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    addItems(); // Load more when sentinel is visible
  }
});

observer2.observe(sentinel);
