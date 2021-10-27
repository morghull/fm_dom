'use strict';

function createCounter(initial = 0) {
  let i = initial; //closure variable
  return function counter() {
    return ++i;
  };
}

const counter1 = createCounter(10);
const counter2 = createCounter();

counter1();
counter1();
counter1();
counter2();
counter2();
