'use strict';

const room = {
  doorLabel: 'bath',
  windowCount: 0,
  tables: null,
  hasFlowers: undefined,
  users: ['user1', 'user2', 'user3'],
};

console.log(room);
const serializedRoom = JSON.stringify(room);
console.log(serializedRoom);

const deserializedRoom = JSON.parse(serializedRoom);
console.log(deserializedRoom);
