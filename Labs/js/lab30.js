'use strict';

let obj1 = {
  firstName: 'Ram',
  lastName: 'Niwash',
  age: 22,
  enabled: true,
  mobileNumbers: [123, 456],
};

console.log('OBJ 1', obj1);

/** USE CASE 1 : Assign OBJ 1 to OBJ 2 */
let obj2 = obj1;
console.log('OBJ 2', obj2);

/** USE CASE 2 :  Change OBJ 2 Values */
obj2.firstName = 'Manish';
obj2.lastName = 'Kumar';
console.log('OBJ 1', obj1);
console.log('OBJ 2', obj2);

/** USE CASE 3 :  Create Shello Copy/Cloing */
let obj3 = { ...obj1 };
console.log('OBJ 3', obj3);

/** USE CASE 4 : Change OBJ 3 Values */
obj3.firstName = 'Kapil';
obj3.lastName = 'Dev';
obj3.age = 43;
obj3.mobileNumbers.push(888);

/** Print OBJ 1, OBJ 2 and OBJ 3  mobileNumbers */
console.log('OBJ 1 -> mobileNumbers', obj1.mobileNumbers);
console.log('OBJ 2 -> mobileNumbers', obj2.mobileNumbers);
console.log('OBJ 3 -> mobileNumbers', obj3.mobileNumbers);

/** USE CASE 5 : Create Deep Copy/Cloing */
let obj4 = structuredClone(obj1);
obj4.firstName = 'Rohit Kumar';
obj4.lastName = 'Malhotra';
obj4.age = 35;
obj4.mobileNumbers.push(777);
obj4.mobileNumbers.push(999);

/** Print OBJ 1, OBJ 2, OBJ 3, and OBJ 4  */
console.log('OBJ 1', obj1);
console.log('OBJ 2', obj2);
console.log('OBJ 3', obj3);
console.log('OBJ 4', obj4);

/** Print OBJ 1, OBJ 2, OBJ 3, and OBJ 4  mobileNumbers */
console.log('OBJ 1 -> mobileNumbers', obj1.mobileNumbers);
console.log('OBJ 2 -> mobileNumbers', obj2.mobileNumbers);
console.log('OBJ 3 -> mobileNumbers', obj3.mobileNumbers);
console.log('OBJ 4 -> mobileNumbers', obj4.mobileNumbers);
