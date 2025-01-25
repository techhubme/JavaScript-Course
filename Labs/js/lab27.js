'use strict';

console.log('X = ', x);
// console.log('Y = ', y);
// console.log('Z = ', Z);

var x = 10;
let y = 20;
const Z = 30;

func1();

// console.log('fun2 = ', fun2);
// fun2();

// fun3();

// FUN_4();

function func1() {
  console.log('This is Function 1');
}

var fun2 = function func2() {
  console.log('This is Function 2');
};

let fun3 = function func3() {
  console.log('This is Function 3');
};

const FUN_4 = function func4() {
  console.log('This is Function 4');
};

console.log('x === window.x ', x === window.x);

/**
 * Take care about special case while using var keyword.
 *  0 is falsy value
 */

if (!cartItemCount) {
  deleteAllCartItems();
}

var cartItemCount = 20;

function deleteAllCartItems() {
  console.log('All items are deleted');
}
