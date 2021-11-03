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

const c1 = counterWithInterval()('i1');
const c2 = counterWithInterval()('i2');
const c3 = counterWithTimeout()('t3');

function counterWithInterval() {
  let i = 1;
  return function (pattern) {
    const id = setInterval(() => {
      console.log(pattern, i++);
      if (i > 10) {
        clearInterval(id);
      }
    }, 500);
  };
}

function counterWithTimeout() {
  let i = 1;
  let id;
  const loop = function (pattern) {
    clearTimeout(id);
    if (i <= 10) {
      console.log(pattern, i++);
      id = setTimeout(() => {
        loop(pattern);
      }, 500);
    }
  };
  return function (pattern) {
    id = setTimeout(() => {
      loop(pattern);
    }, 500);
  };
}
