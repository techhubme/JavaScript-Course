'use strict';

// Callbacks
console.log('Start');

setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);

console.log('End');

// Promises
let fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data fetched!');
  }, 2000);
});

fetchData.then(result => console.log(result));

// Async / Await (Modern & Cleaner)
async function getData() {
  console.log('Fetching...');
  let data = await new Promise(resolve => {
    setTimeout(() => resolve('Data received!'), 2000);
  });
  console.log(data);
}

getData();
