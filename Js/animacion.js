// Seleccionar los elementos del DOM
const intro = document.querySelector('.intro');
const logo = document.querySelector('.logo');
const logoParts = document.querySelectorAll('.logo-parts');

// Esperar a que se cargue el contenido
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    logoParts.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (index + 1) * 100);
    });

    setTimeout(() => {
      logoParts.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (index + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = '-200vh';
    }, 2300);
  });
});
