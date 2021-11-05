'use strict';

const pr1 = fetch('./assets/js/data.js');

pr1
  .then((response) => response.json())
  .then((data) => {
    console.log(JSON.stringify(data));
  })
  .catch((err) => {
    if (err instanceof SyntaxError) console.log('syntax!');
    else console.log(err);
  })
  .finally(() => {
    console.log('end');
  });

try {
  const userNum = prompt();
  if (isNaN(userNum)) {
    throw new Error();
  }
} catch (error) {}

console.log('qwerty');
