'use strict';

function handlePromise(promise) {
  return promise.then((data) => {
    console.log('in function: ', data);
  }).catch((err)=>{
    console.log('in function: ', err);
  });
}

handlePromise(Promise.resolve(10));

handlePromise(Promise.reject('error'));
