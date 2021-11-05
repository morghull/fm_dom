'use strict';

console.log('start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

const pr1 = new Promise((resolve, reject) => {
  console.log('promise start');
  resolve();
  reject();
  console.log('promise end');
});

pr1
  .then(() => {
    console.log('resolve');
  })
  .catch(() => {
    console.log('reject');
  })
  .finally(() => {
    console.log('finally');
  });

console.log('end');
