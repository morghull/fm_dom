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
const secondClickHandler = (e) => {
  console.dir(e);
};
for (const btn of btns) {
  btn.addEventListener('click', btnHandler);
  btn.addEventListener('click', secondClickHandler);
}
