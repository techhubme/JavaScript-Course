'use strict';

function m1() {
  let B = 10;

  if (B < 20) {
    let B = 20;
    console.log('m1() -> IF{} -> B = ', B);
  }

  console.log('m1() -> B = ', B);
}

m1();
