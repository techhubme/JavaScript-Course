'use strict';

// LOOKUP

/** Find the sum of array elements */

const VALUES = [3, 7, 9, 2, 10, 2];

//debugger;
let sum = 0;

for (let i = 0; i < VALUES.length; i++) {
  let a = VALUES[i];
  sum = sum + a;
}

console.log('LOG SUM = ', sum);
console.error('ERROR SUM = ', sum);
console.warn('WARNING SUM = ', sum);
