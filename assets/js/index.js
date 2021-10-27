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

const btnSliderHandler =
  (direction = 'next') =>
  () => {
    slider.currentIndex =
      slider[direction === 'next' ? 'nextIndex' : 'prevIndex'];
    updateView();
  };

buttonNext.addEventListener('click', btnSliderHandler('next'));
buttonPrev.addEventListener('click', btnSliderHandler('prev'));
image.addEventListener('wheel', (e) =>
  btnSliderHandler(e.deltaY > 0 ? 'next' : 'prev')
);

//-------------------------------------

const uniqueBtn = document.getElementById('unique');

uniqueBtn.addEventListener('click', (e) => {
  console.log(e.target.innerText);
  console.log(e.target.textContent);
});

document.body.addEventListener('click', btnUniqHandler);

function btnUniqHandler(e) {
  console.log(e.target.innerText);
  console.log(e.target.textContent);
}

uniqueBtn.dispatchEvent(new MouseEvent('click'));
