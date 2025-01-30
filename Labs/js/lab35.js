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

  /**
   * Order Pizza
   *
   * @param {string} mainIngredient
   * @param  {...string} otherIngredients
   */
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log('mainIngredient =', mainIngredient);
    console.log('otherIngredients =', otherIngredients);
  },
};
