'use strict';

// const result = [];

// const form = document.getElementById('root-form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const {
//     target: { textInput },
//   } = e;
//   console.dir(textInput.value);

//   [...e.target.elements]
//     .map((elem) => elem.value.trim())
//     .filter((value) => value)
//     .map((value) => {
//       result.push(value);
//       document
//         .getElementById('lists')
//         .append(
//           createElement(
//             'li',
//             { classNames: 'submited-value' },
//             document.createTextNode(value)
//           )
//         );
//     });
//   e.target.reset();
//   console.log(result);
// });

// function createElement(type, { classNames }, ...children) {
//   const elem = document.createElement(type);
//   elem.classList.add(...classNames);
//   elem.append(...children);
//   return elem;
// }
