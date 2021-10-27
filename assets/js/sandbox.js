'use strict';

function createCounter() {
  let i = 0; //closure variable
  return function counter() {
    i++;
    return i;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter1();
counter1();
counter2();
counter2();