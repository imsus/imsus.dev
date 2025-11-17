// Add the module preload polyfill at the beginning
import 'vite/modulepreload-polyfill';

// Import CSS to ensure Vite processes it
import '../css/main.css';

// Add any interactive JavaScript here
console.log('Hugo + Vite + Tailwind CSS 4 - Modern static site development!');

// Example: Add smooth scrolling to internal links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});