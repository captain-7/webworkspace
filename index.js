'use strict';

const fullscreen = () => {
  const element = document.documentElement; // Fullscreen the entire page
  const requestMethod =
    element.requestFullscreen ||
    element.mozRequestFullScreen ||
    element.webkitRequestFullscreen ||
    element.msRequestFullscreen;

  if (requestMethod) {
    requestMethod.call(element);
  }
};

const buttons = document.querySelectorAll('.button-container button')
const flash_div = document.querySelector('#flash')
let currTime = new Date().getHours();

buttons[0].addEventListener('click', () => {
  fullscreen();

  setTimeout(
    () => { currTime >= 4 && currTime <= 20 ? flash_div.style.opacity = 1 : null; }, 1000);

  setTimeout(() => {
    window.location.href = 'Cridustine.html';;
  }, 2000);

});

buttons[1].addEventListener('click', () => {
  window.location.href = 'Gobin_Balls.html';
})

buttons[2].addEventListener('click', () => {
  window.location.href = 'Hail_NIgler.html'
})


