'use strict';
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('highlight');
      } else {
        entry.target.classList.remove('highlight');
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of section is visible
  }
);

sections.forEach(section => {
  observer.observe(section);
});
