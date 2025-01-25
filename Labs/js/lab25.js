'use strict';
const A = 10;

function m1() {
  var B = 20;

  if (A < 20) {
    console.log('m1() -> IF{} -> B = ', B);
    B = 30;
    console.log('m1() -> IF{} -> B = ', B);
    var C = 40;
    console.log('m1() -> IF{} -> C = ', C);
  }

  console.log('m1() -> B = ', B);
  console.log('m1() -> C = ', C);
}

m1();

console.log('A', A);
// console.log('B', B);
// console.log('C', C);
