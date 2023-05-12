const button = document.getElementById('cta-btn');
const element = document.getElementById('root');

button.addEventListener('click', () => {
  element.scrollIntoView({ behavior: 'smooth' });
});


