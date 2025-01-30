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

  /**
   * Order food
   *
   * @param {number} starterIndex
   * @param {number} mainIndex
   * @returns
   */
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  /**
   * orderDelivery with multiple parameters to receive as object
   *
   * @param {object} param0
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
   * @param {object} param0
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

  /**
   * Order Pasta with differenct three ingredients
   *
   * @param {string} ing1
   * @param {string} ing2
   * @param {string} ing3
   */
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
};

/** USE CASE 1 */
const INPUT_ARRAY = [7, 8, 9];
const OUTPUT_ARRAY_1 = [
  1,
  2,
  3,
  INPUT_ARRAY[0],
  INPUT_ARRAY[1],
  INPUT_ARRAY[2],
];
console.log('OUTPUT_ARRAY_1 =', OUTPUT_ARRAY_1);

// Using Spread Operator (...)
const OUTPUT_ARRAY_2 = [4, 5, 6, ...INPUT_ARRAY];
console.log('OUTPUT_ARRAY_2 =', OUTPUT_ARRAY_2);
console.log(...OUTPUT_ARRAY_2);

/** USE CASE 2 */
const newMenu = [...RESTAURANT.mainMenu, 'New Menu Item'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...RESTAURANT.mainMenu];
console.log('mainMenuCopy =', mainMenuCopy);

//Join 2 Arrays
const joinedMenu = [...RESTAURANT.starterMenu, ...RESTAURANT.mainMenu];
console.log('joinedMenu =', joinedMenu);

/**
 * USE CASE 3
 *
 * Iterables: arrays, strings, maps, sets. NOT objects.
 *
 */
//strings
const myName = 'Ram Niwash';
const letters = [...myName, ' ', 'M'];
console.log('letters =', letters);
// Invalid
// const newName = `My Name letters are ${...myName}`;

// arrays Real world example in function use.
const ingredients = [
  prompt("let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
RESTAURANT.orderPasta(...ingredients);

// object
const newRestro = { foundedIn: 1992, founder: 'Ram Niwash', ...RESTAURANT };
console.log('newRestro = ', newRestro);
const restroCopy = { ...newRestro };
restroCopy.name = 'My New Restro';
console.log('restroCopy = ', restroCopy);
