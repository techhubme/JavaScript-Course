'use strict';

let numbers = [1, 2, 3];
numbers.push(4); // [1, 2, 3, 4]
numbers.pop(); // [1, 2, 3]
numbers.unshift(0); // [0, 1, 2, 3]
numbers.shift(); // [1, 2, 3]

console.log(numbers.includes(2)); // true
console.log(numbers.indexOf(3)); // 2

numbers.forEach(n => console.log(n)); // 1, 2, 3
let doubled = numbers.map(n => n * 2); // [2, 4, 6]
let filtered = numbers.filter(n => n > 1); // [2, 3]
let sum = numbers.reduce((a, b) => a + b, 0); // 6

numbers.splice(1, 1, 99); // [1, 99, 3]
let sliced = numbers.slice(0, 2); // [1, 99]

let merged = numbers.concat([4, 5]); // [1, 99, 3, 4, 5]
let joined = merged.join('-');
console.log('typeof joined = ', typeof joined, ' joined = ', joined);

merged.sort((a, b) => a - b); // [1, 3, 4, 5, 99]
merged.reverse(); // [99, 5, 4, 3, 1]

console.log('---------- Reduce Method ---------');

const numbers2 = [1, 2, 3, 4, 5];

const sum2 = numbers2.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log('Sum 2 =', sum2); // Output: 15

const numbers3 = [4, 8, 2, 4, 7, 8, 5];
console.log('Number 3', numbers3);

let findLast = numbers3.findLast(num => {
  num > 6;
});
console.log('numbers3.findLast', findLast);
