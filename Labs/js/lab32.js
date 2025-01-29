'use strict';

/** The RESTAURANT Constant */
const RESTAURANT = {
  name: 'Bhartiya_Restro',
  location: 'Near Sagwan Chonk, Sirsa',

  categories: [
    'Delhi Khana',
    'Kerela Special',
    'Punjabi Roti',
    'Karnataka Dosa',
  ],

  starterMenu: ['Roti', 'Sabji', 'Salad', 'Paratha'],
  mainMenu: ['Special', 'Lunch', 'Dinner', 'Breakfast'],

  openingHours: {
    monday: {
      open: 6,
      close: 22,
    },
    tuesday: {
      open: 6,
      close: 22,
    },
    wednesday: {
      open: 6,
      close: 22,
    },
    thursday: {
      open: 6,
      close: 22,
    },
    friday: {
      open: 6,
      close: 22,
    },
    saturday: {
      open: 9,
      close: 22,
    },
    sunday: {
      open: 9,
      close: 22,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  /**
   * orderDelivery with multiple parameters to receive as object
   *
   * @param {*} param0
   */
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log('---------- orderDelivery -------------');
    console.log(`Order received! ${this.starterMenu[starterIndex]}
      and ${this.mainMenu[mainIndex]} will be delivered to ${address}
      at ${time}`);
  },

  /**
   * orderDeliveryDefault with default parameter value.
   *
   * @param {*} param0
   */
  orderDeliveryDefault: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log('---------- orderDeliveryDefault -------------');
    console.log(`Order received! ${this.starterMenu[starterIndex]}
      and ${this.mainMenu[mainIndex]} will be delivered to ${address}
      at ${time}`);
  },
};

/** CASE 6 (Method Call for multiple parameter using object) */
const PARAM_OBJ1 = {
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
};

RESTAURANT.orderDelivery(PARAM_OBJ1);

const PARAM_OBJ2 = {
  address: 'Via del Sole, 21',
};
RESTAURANT.orderDeliveryDefault(PARAM_OBJ2);

/** CASE 1 (Multi variables with same names) */
const { name, openingHours, categories } = RESTAURANT;

console.log('name =', name);
console.log('openingHours =', openingHours);
console.log('categories =', categories);

/** CASE 2 (Multi variables with other names) */
const { name: restroName, openingHours: hours, categories: tags } = RESTAURANT;

console.log('restroName =', restroName);
console.log('hours =', hours);
console.log('tags =', tags);

/** CASE 3 (Multi variables with default values) */
const { menu = [], starterMenu: starters = [], myAbc = 100 } = RESTAURANT;

console.log('menu =', menu);
console.log('starters =', starters);
console.log('myAbc =', myAbc);

/** CASE 4 (Mutating Variables) */
let a = 111;
let b = 999;
console.log('a =', a);
console.log('b =', b);

const myObj = { a: 23, b: 7, c: 14 };
({ a, b } = myObj);
console.log('a =', a);
console.log('b =', b);

/** CASE 5 (Nested Objects) */
const {
  friday: { open: OP, close: CL },
} = openingHours;

console.log('OP =', OP);
console.log('CL =', CL);
