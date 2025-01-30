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
    saturday: {
      open: 9,
      close: 22,
    },
    sunday: {
      open: 9,
      close: 22,
    },
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
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log('arr =', arr);

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('a =', a);
console.log('b =', b);
console.log('others =', others);

/**
 * USE CASE 2
 *
 * Note : REST LEFT side SPREAD should be always the last.
 */
const [pizza, , risotto, ...otherFoods] = [
  ...RESTAURANT.mainMenu,
  ...RESTAURANT.starterMenu,
];
console.log('pizza =', pizza);
console.log('risotto =', risotto);
console.log('otherFoods =', otherFoods);

/** USE CASE 3 */
const { saturday, sunday, ...weekDays } = RESTAURANT.openingHours;
console.log('saturday =', saturday);
console.log('sunday =', sunday);
console.log('weekDays =', weekDays);
