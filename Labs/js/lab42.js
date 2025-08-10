'use strict';

console.log('ℹ️ Set Demo');

let mySet = new Set();
// let mySet = new Set([1, 2, 3, 3]);  // We can create set like this

mySet.add(1);
mySet.add(2);
mySet.add(2); // duplicate, will be ignored

console.log(mySet); // Set { 1, 2 }

for (let item of mySet) {
  console.log(item);
}

// Or using forEach
mySet.forEach(value => console.log(value));

console.log('ℹ️ Map Demo');

//let myMap = new Map();
// OR we can create with default values
// let myMap = new Map([
//   ['name', 'Ram'],
//   ['age', 22],
// ]);

let user = new Map();
user.set('name', 'Ram');
user.set('age', 25);
user.set(100, 'ID'); // number as key
user.set({ title: 'Engineer' }, 'Job Title'); // object as key

console.log(user.get('name')); // Ram
console.log(user.has(100)); // true
console.log(user.size);

let capitals = new Map([
  ['India', 'New Delhi'],
  ['France', 'Paris'],
  ['Japan', 'Tokyo'],
]);

// Loop through [key, value]
for (let [country, capital] of capitals) {
  console.log(country, '→', capital);
}

// Keys only
for (let key of capitals.keys()) {
  console.log(key);
}

// Values only
for (let value of capitals.values()) {
  console.log(value);
}

// forEach
capitals.forEach((capital, country) => {
  console.log(country, ':', capital);
});

console.log('ℹ️ String Demo');

console.log('String mehtods');
let str = '  JavaScript is Fun!  ';
let exampleStr = 'banana';
let exampleStr2 = 'Hello';

// length
console.log('Ram = ', 'length:', 'Ram'.length);

// charAt
console.log('Ram = ', 'charAt(1):', 'Ram'.charAt(1));

// at
console.log('Ram = ', 'at(-1):', 'Ram'.at(-1));

// charCodeAt
console.log('A = ', 'charCodeAt(0):', 'A'.charCodeAt(0));

// concat
console.log('Hello = ', 'concat("World")', 'Hello'.concat(' World'));

// includes
console.log('Hello = ', "includes('ell'):", 'Hello'.includes('ell'));

// startsWith
console.log('Hello = ', "startsWith('He'):", 'Hello'.startsWith('He'));

// endsWith
console.log('Hello = ', "endsWith('lo'):", 'Hello'.endsWith('lo'));

// indexOf
console.log(exampleStr, " = indexOf('na'):", exampleStr.indexOf('na'));

// lastIndexOf
console.log(exampleStr, " = lastIndexOf('na'):", exampleStr.lastIndexOf('na'));

// slice
console.log('abcdef = ', 'slice(1,4):', 'abcdef'.slice(1, 4));

// substring
console.log('abcdef = ', 'substring(1,4):', 'abcdef'.substring(1, 4));

// substr (deprecated but still works)
console.log('abcdef = ', 'substr(1,3):', 'abcdef'.substr(1, 3));

// toLowerCase
console.log('Hello = ', 'toLowerCase():', 'Hello'.toLowerCase());

// toUpperCase
console.log('Hello = ', 'toUpperCase():', 'Hello'.toUpperCase());

// trim
console.log(str, ' = trim():', str.trim());

// trimStart
console.log(str, ' = trimStart():', str.trimStart());

// trimEnd
console.log(str, ' = trimEnd():', str.trimEnd());

// repeat
console.log('Hi = ', 'repeat(3):', 'Hi'.repeat(3));

// replace
console.log('cat = ', 'replace("c", "b")', 'cat'.replace('c', 'b'));

// replaceAll
console.log('cat cat = ', 'replaceAll("cat", "dog")', 'cat cat'.replaceAll('cat', 'dog'));

// split
console.log('a,b,c = ', "split(','):", 'a,b,c'.split(','));

// match
console.log('abc = ', 'match(/b/):', 'abc'.match(/b/));

// matchAll
console.log('abcabc = ', 'matchAll(/a/g):', [...'abcabc'.matchAll(/a/g)]);

// padStart
console.log('5 = ', "padStart(3,'0'):", '5'.padStart(3, '0'));

// padEnd
console.log('5 = ', "padEnd(3,'0'):", '5'.padEnd(3, '0'));
