'use strict';

const room1 = {
  doorLabel: 'bath',
  windowCount: 0,
  tables: null,
  hasFlowers: undefined,
  users: ['Andrey', 'Tanya', 'Katya'],
};
const room2 = {
  doorLabel: 'citchen',
  windowCount: 2,
  tables: [
    {
      name: 'coffe table',
    },
  ],
  hasFlowers: undefined,
  users: ['Andrey', 'Tanya', 'Katya'],
};

console.log(room1);
const serializedRoom = JSON.stringify(room1);
console.log(serializedRoom);

const deserializedRoom = JSON.parse(serializedRoom);
console.log(deserializedRoom);
