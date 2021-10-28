'use strict';

const btns = document.querySelectorAll('#root>button');
const root = document.getElementById('root');

const btnHandler = ({
  target: {
    dataset: { color },
    parentNode: parent,
  },
}) => {
  parent.style.backgroundColor = color;
};
const secondClickHandler = ({ currentTarget }) => {
  console.dir(currentTarget);
};
for (const btn of btns) {
  btn.addEventListener('click', btnHandler);
  btn.addEventListener('click', secondClickHandler);
  btn.addEventListener(
    'click',
    () => {
      console.log(123);
    },
    { capture: true, once: true }
  );
}

document
  .getElementById('root')
  .addEventListener('click', secondClickHandler, {
    capture: true,
    once: true,
  });
document.body.addEventListener('click', secondClickHandler, true);
document.addEventListener('click', secondClickHandler, true);
window.addEventListener('click', secondClickHandler, true);
