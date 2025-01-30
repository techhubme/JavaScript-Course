'use strict';

/**
 * USE CASE 1
 */
var pName = 'RAM NIWASH';

let person = {
  pName: 'SHIV KUMAR',

  getName: function () {
    console.log('Person -> this.pName ', this.pName);
    return this.pName;
  },

  getName2: () => {
    console.log('Person -> this.pName ', this.pName);
    return this.pName;
  },

  getAge: () => {
    console.log('Person -> this.pName ', this.age);
    return this.age;
  },
};

let ePName = person.getName();
console.log('ePName =', ePName);

let ePName2 = person.getName2();
console.log('ePName2 =', ePName2);

let pAge = person.getAge();
console.log('pAge =', pAge);

/**
 * USE CASE 2
 */
let employee = {
  eName: 'PREM KUMAR',

  getEName: function () {
    console.log('Employee -> this.eName = ', this.eName);

    let testFun = function () {
      return this.eName;
    };

    let tEName = testFun();

    return tEName;
  },
};

// let eeName = employee.getEName();
// console.log('eeName = ', eeName);

/**
 * USE CASE 3
 */
let employee2 = {
  eName: 'PREM KUMAR',

  getEName: function () {
    console.log('Employee -> this.eName = ', this.eName);

    // Solution 1
    let self = this;
    let testFun = function () {
      return self.eName;
    };

    let tEName = testFun();

    return tEName;
  },
};

let eeName2 = employee2.getEName();
console.log('eeName2 = ', eeName2);

/**
 * USE CASE 4
 */
let employee3 = {
  eName: 'SUNDEEP KUMAR',

  getEName: function () {
    console.log('Employee -> this.eName = ', this.eName);

    // Solution 2
    let testFun = () => {
      return this.eName;
    };

    let tEName = testFun();

    return tEName;
  },
};

let eeName3 = employee3.getEName();
console.log('eeName3 = ', eeName3);

/**
 * USE CASE 5
 *
 * Arguments
 */
function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log('add(7, 3) = ', add(7, 3));
console.log('add(7, 3, 5) = ', add(7, 3, 5));
console.log('add(7, 3, 5, 6) = ', add(7, 3, 5, 6));
console.log('add(7, 3, 5, 6, 7) = ', add(7, 3, 5, 6, 7));

let addFun = () => {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

//console.log('addFun(7, 3) = ', addFun(7, 3));
