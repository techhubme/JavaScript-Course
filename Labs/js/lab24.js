'use strict';
const A = 10;

function m1() {
  var B = 20;

  if (A < 20) {
    let C = 30;

    console.log('m1() -> IF{} -> C = ', C);
    console.log('m1() -> IF{} -> B = ', B);
    console.log('m1() -> IF{} -> A = ', A);
  }

  function m11() {
    const D = 40;

    console.log('m1() -> m11() -> D = ', D);
    // console.log('m1() -> m11() -> C = ', C);
    console.log('m1() -> m11() -> B = ', B);
    console.log('m1() -> m11() -> A = ', A);
  }

  m11();

  //   console.log('m1() -> D = ', D);
  //   console.log('m1() -> C = ', C);
  console.log('m1() -> B = ', B);
  console.log('m1() -> A = ', A);
}

m1();
// m11();

console.log('A', A);
// console.log('B', B);
// console.log('C', C);
