'use strict';

const root = document.getElementById('root');

root.addEventListener('click', rootClickHandler);

function rootClickHandler({ target }) {
  if (target.parentNode === root) target.innerText += '!';
}
