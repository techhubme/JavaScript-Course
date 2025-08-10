'use strict';

console.log('ℹ️ Working with Numbers');

let numStr1 = '44';
let num1 = Number.parseInt(numStr1);
console.log('typeof numStr1', typeof numStr1, numStr1, 'typeof num1', typeof num1, num1);

console.log('Number.parseFloat', Number.parseFloat(numStr1));
console.log('Number.isNaN', Number.isNaN(numStr1));
console.log('Number.isFinite', Number.isFinite(numStr1));
console.log('Number.isInteger', Number.isInteger(numStr1));
console.log('Number.isInteger', Number.isInteger(num1));

let a = 125_345_346_678;
let b = 123_987;
let c = 15_00;
let d = 1_500;

console.log('a', a);
console.log('b', b);
console.log('c', c);
console.log('d', d);

console.log('ℹ️ Working with Math');

console.log('Math.PI =', Math.PI); // 3.141592653589793
console.log('Math.E =', Math.E); // 2.718281828459045
console.log('Math.SQRT2 =', Math.SQRT2); // 1.4142135623730951
console.log('Math.LN10 =', Math.LN10); // 2.302585092994046

console.log('Math.round(4.7) =', Math.round(4.7)); // 5   → Round to nearest integer
console.log('Math.round(4.7) =', Math.floor(4.7)); // 4   → Round down
console.log('Math.round(4.2) =', Math.ceil(4.2)); // 5   → Round up
console.log('Math.round(4.9) =', Math.trunc(4.9)); // 4   → Remove decimal part

console.log('Math.min(3, 1, 4, 2) =', Math.min(3, 1, 4, 2)); // 1
console.log('Math.max(3, 1, 4, 2) =', Math.max(3, 1, 4, 2)); // 4

console.log('Math.random() = ', Math.random()); // Random number between 0 and 1
console.log('Math.floor(Math.random() * 10) + 1) = ', Math.floor(Math.random() * 10) + 1); // Random number between 1 and 10

console.log('Math.pow(2, 3) =', Math.pow(2, 3)); // 8
console.log('Math.sqrt(16) =', Math.sqrt(16)); // 4

console.log('Math.abs(-5) =', Math.abs(-5)); // 5

console.log('Math.log(1) =', Math.log(1)); // 0 → Natural log (base e)
console.log('Math.log10(100) =', Math.log10(100)); // 2 → Log base 10
console.log('Math.exp(1) =', Math.exp(1)); // e^1 = 2.718281828459045

console.log('Math.sin(Math.PI / 2) =', Math.sin(Math.PI / 2)); // 1
console.log('Math.cos(0) =', Math.cos(0)); // 1
console.log('Math.tan(Math.PI / 4) =', Math.tan(Math.PI / 4)); // 1

console.log('Math.sign(-5) =', Math.sign(-5)); // -1
console.log('Math.sign(0) =', Math.sign(0)); // 0
console.log('Math.sign(5) =', Math.sign(5)); // 1

function randomCirclePoint(radius) {
  const angle = Math.random() * 2 * Math.PI;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  return { x: Math.round(x), y: Math.round(y) };
}

console.log(randomCirclePoint(10));

console.log('ℹ️ Working with BigInt');

const normalNum = 9007199254740991; // Number.MAX_SAFE_INTEGER
console.log(normalNum + 1); // 9007199254740992
console.log(normalNum + 2); // 9007199254740992 ❌ Wrong due to precision loss

const bigNum = 9007199254740991n;
console.log(bigNum + 1n); // 9007199254740992n ✅
console.log(bigNum + 2n); // 9007199254740993n ✅

let bigIntA = 100n;
let bigIntB = 20n;

console.log(bigIntA + bigIntB); // 120n
console.log(bigIntA - bigIntB); // 80n
console.log(bigIntA * bigIntB); // 2000n
console.log(bigIntA / bigIntB); // 5n (integer division, decimals are truncated)
console.log(bigIntA % bigIntB); // 0n

console.log('ℹ️ Working with Date');

// let date = new Date();
let date = new Date('2025-08-09T10:30:00');

console.log(date.getFullYear()); // Year (e.g., 2025)
console.log(date.getMonth()); // Month (0-11)
console.log(date.getDate()); // Day of month (1-31)
console.log(date.getDay()); // Day of week (0-6, 0=Sunday)
console.log(date.getHours()); // Hours (0-23)
console.log(date.getMinutes()); // Minutes (0-59)
console.log(date.getSeconds()); // Seconds (0-59)
console.log(date.getMilliseconds()); // Milliseconds (0-999)
console.log(date.getTime()); // Milliseconds since 1970-01-01

console.log(date.toDateString()); // Example: "Sat Aug 09 2025"
console.log(date.toTimeString()); // Example: "19:35:20 GMT+0530 (India Standard Time)"
console.log(date.toISOString()); // Example: "2025-08-09T14:05:20.000Z"
console.log(date.toLocaleDateString('en-IN')); // "09/08/2025"
console.log(date.toLocaleTimeString('en-IN'));

console.log('ℹ️ Working Date Internationalization');
console.log(new Intl.DateTimeFormat('hi-IN').format(date)); // 9/8/2025
console.log(new Intl.DateTimeFormat('en-US').format(date)); // 8/9/2025
console.log(new Intl.DateTimeFormat('en-GB').format(date)); // 09/08/2025
console.log(new Intl.DateTimeFormat('ja-JP').format(date)); // 2025/8/9

let dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
console.log(new Intl.DateTimeFormat('en-IN', dateOptions).format(date)); // Saturday, August 9, 2025

console.log('ℹ️ Working Number Internationalization');

let number = 1234567.89;
console.log(new Intl.NumberFormat('hi-IN').format(number)); // 12,34,567.89
console.log(new Intl.NumberFormat('en-US').format(number)); // 1,234,567.89
console.log(new Intl.NumberFormat('de-DE').format(number)); // 1.234.567,89

let price = 123456.789;
console.log(new Intl.NumberFormat('hi-IN', { style: 'currency', currency: 'INR' }).format(price)); // ₹1,23,456.79
console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)); // $123,456.79
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price)); // ￥123,457

let percentage = 0.756;
console.log(new Intl.NumberFormat('en-IN', { style: 'percent', maximumFractionDigits: 1 }).format(percentage)); // 75.6%

console.log('ℹ️ Working setTimeout');

console.log('Start');

setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000); // 2000 ms = 2 seconds

console.log('End');

console.log('ℹ️ Working setInterval');

let count = 0;

let timer = setInterval(() => {
  count++;
  console.log('Count:', count);

  if (count === 5) {
    clearInterval(timer); // stop after 5 counts
    console.log('Interval stopped');
  }
}, 1000); // runs every 1 second
