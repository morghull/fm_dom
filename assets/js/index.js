'use strict';

const btn = document.getElementById('btn');
btn.addEventListener('click', btnHandler);

function btnHandler(e) {}

console.log(1);
const identificator = setTimeout(() => {
  console.log(3);
}, 1500);
console.log(2);

clearTimeout(identificator);

const c1 = counter();
const c2 = counter();
function counter() {
  let i = 1;
  return function (pattern) {
    const id = setInterval(() => {
      console.log(pattern,i++);
      if (i > 10) {
        clearInterval(id);
      }
    }, 500);
  };
}
c1('c1');
c2('c2');
