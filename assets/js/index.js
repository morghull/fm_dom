'use strict';

const imagesDB = [
  'https://karma-kollection.com/wp-content/uploads/2018/05/magical-banner.jpg',
  'https://fanaticcook.files.wordpress.com/2021/04/animals.jpg',
  'https://i.pinimg.com/originals/7e/1c/0b/7e1c0b3223789770299bc3b66b2fc2a0.jpg',
  'https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-1.jpg',
  'https://i.pinimg.com/originals/2c/84/93/2c8493d6251661e82b62fc6ab518e7e3.jpg',
];

const slider = new Slider(imagesDB);

const image = document.querySelector('.slide>img');
const [buttonPrev, buttonNext] = document.querySelectorAll(
  '.slider-container>button'
);

function updateView() {
  image.setAttribute('src', slider.currentSlide);
}
updateView();

buttonNext.addEventListener('click', () => {
  slider.currentIndex = slider.next();
  updateView();
});
buttonPrev.addEventListener('click', () => {
  slider.currentIndex = slider.prev();
  updateView();
});
image.addEventListener('wheel', (e) => {
  slider.currentIndex = e.deltaY > 0 ? slider.next() : slider.prev();
  updateView();
});
