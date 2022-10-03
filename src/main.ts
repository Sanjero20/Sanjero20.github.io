import './style.css';
import './mobile.css';

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const languageIcons = document.querySelectorAll('.lang-icon');
languageIcons.forEach(icon => {
  icon.classList.add('hidden');
});

let delay = 0;
const delayInterval = 100;
languageIcons.forEach(icon => {
  delay += delayInterval;
  icon.setAttribute('style', `transition-delay: ${delay}ms`);
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => {
  observer.observe(element);
});
