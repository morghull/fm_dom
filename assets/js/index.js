'use strict';

const user = {
  name: 'Elon',
  sname: 'Musk',
  age: 50,
  getFullName() {
    return `${this.name} ${this.sname}`;
  },
  children: ['one', 'two'],
  isAdult: true,
  hasPet: undefined,
  isUkraine: null,
  [Symbol('test')]: 123,
  friends: {
    friend1: 'Tom',
    friend2: 'Tim',
  },
};

console.log(user);
const serializedUser = JSON.stringify(user);
console.log(serializedUser);

const deSerealizedUser = JSON.parse(serializedUser);
console.log(deSerealizedUser);
