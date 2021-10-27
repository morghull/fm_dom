'use strict';

function createCounter(initial = 0) {
  let i = initial; //closure variable
  return {
    increment() {
      return ++i;
    },
    decrement() {
      return --i;
    },
  };
}

const counter1 = createCounter(10);
const counter2 = createCounter();

counter1.increment();
counter1.increment();
counter1.decrement();
counter2.increment();
counter2.increment();

const createAdder =
  (initialValue = 0) =>
  (value) =>
    (initialValue += value);

const adder1 = createAdder(10);
console.log(adder1(10));
console.log(adder1(4));
console.log(adder1(3));
