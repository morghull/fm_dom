'use strict';

// const promiseData = fetch('./assets/js/data.json');
// console.log(promiseData);
// promiseData.then((response) => {
//   console.log('ok');
//   console.log(response);
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => {
//     console.table(data);
//   });
//   // const textPromise = response.text();
//   // textPromise.then((data) => {
//   //   console.log('text data:', data);
//   // });
// });
fetch('./assets/js/data.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((obj) => {
      console.log(obj.doorLabel);
    });
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('done');
  });

const customPromise = new Promise(executor);

function executor(resolve, reject) {
  Math.random() > 0.5 ? resolve('ok') : reject('lose');
}

customPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, ms);
  });
}

timeout(1000)
  .then(() => {
    console.log(1);
  })
  .catch(() => {
    console.log(2);
  })
  .finaly(() => {
    console.log(3);
  });
