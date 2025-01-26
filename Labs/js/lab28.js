'use strict';

/** The Global this keyword (will have window object Window) */
console.log('Global This ', this);

/** This in function (will be undefined)*/
function fun1() {
  console.log('this in Function = ', this);
}

fun1();

/** This in arrow function (pics from window)*/
let fun2 = () => {
  console.log('this in arrow Function = ', this);
};

fun2();

/** Define the Person1 Object */
let person = {
  personName: 'Ram Niwash',
  personAge: 22,

  getName: function () {
    console.log('this in Person1 =', this);
    console.log('this.personName = ', this.personName);
    return this.personName;
  },

  getAge: function () {
    console.log('this in Person1 =', this);
    console.log('this.personAge = ', this.personAge);
    return this.personAge;
  },
};

let pName = person.getName();
console.log('Person Name = ', pName);

let pAge = person.getAge();
console.log('Person Age = ', pAge);

/** Define the Person1 Object */
let person2 = {
  personName: 'Shyam',
};

person2.getName = person.getName;

let pName2 = person2.getName();
console.log('Person2 Name = ', pName2);

/** Assign Person1 method to global method. */
let myFun = person.getName;
console.log('myFun ', myFun);
let pN = myFun();
console.log('pN = ', pN);
