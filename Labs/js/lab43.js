'use strict';

console.log('ℹ️ Demo for Call by value');

function changeValue(num) {
  num = 100;
  console.log('Inside function num = ', num);
}

let num = 50;
console.log('Outside num (Before Call) = ', num);
changeValue(num);
console.log('Outside num (After Call) = ', num);

console.log('ℹ️ Demo for Call by Reference');

function changeObject(obj) {
  obj.name = 'Ram';
  console.log('Inside function:', obj);
}

let obj = { name: 'John' };
console.log('Outside obj (Before Call) = ', obj);
changeObject(obj);
console.log('Outside obj (After Call) = ', obj);

console.log('ℹ️ Argument as function');

function greet(name) {
  console.log(`Hello, ${name}!`);
}

function processUserInput(callback) {
  let name = 'Ram';
  callback(name); // Calling the callback
}

processUserInput(greet);

setTimeout(function () {
  console.log('This runs after 4 seconds');
}, 4000);

console.log('ℹ️ Function returns a function');

function outer() {
  function inner() {
    console.log('Hello from the inner function!');
  }
  return inner; // Returning the function itself
}

let myFunc = outer(); // outer() returns inner
myFunc(); // Call the returned function

console.log('ℹ️ Demo for call and apply');

function introduce(greeting, age) {
  console.log(`${greeting}, my name is ${this.name} and I am ${age} years old.`);
}

let person1 = { name: 'Ram' };
let person2 = { name: 'John' };

// Using call()
introduce.call(person1, 'Hello', 25);
introduce.call(person2, 'Hi', 30);

// Using apply()
introduce.apply(person1, ['Hello', 25]);
introduce.apply(person2, ['Hi', 30]);

console.log('ℹ️ Bind function demo');

let person = {
  name: 'Ram',
};

let myGreet = function (name) {
  console.log(`Hello my name is ${name}`);
};

let newGreet = myGreet.bind(person);

newGreet('Shree');
person.myGreet('John'); // person.myGreet is not a function
