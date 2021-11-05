'use strict';

console.log('start');

try {
  console.log('try 1');
  throw Error();
  console.log('try 2');
} catch (error) {
  console.log('catch error');
} finally {
  console.log('finally');
}

console.log('end');
