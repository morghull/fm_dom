'use strict';

function loadImage(path) {
  const image = new Image();
  image.src = path;
  return new Promise((resolve, reject) => {
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.addEventListener('error', () => {
      reject(new Error('path invalid'));
    });
  });
}

loadImage('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')
  .then((elem) => {
    document.body.prepend(elem);
  })
  .catch((err) => {
    console.log(err);
  });
