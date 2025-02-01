'use strict';

const weekdays = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
const openingHours = {
  [weekdays[0]]: {
    open: 0,
    close: 24,
  },
  [weekdays[1]]: {
    open: 0,
    close: 24,
  },
  [weekdays[2]]: {
    open: 6,
    close: 22,
  },
  [weekdays[3]]: {
    open: 6,
    close: 22,
  },
  [weekdays[4]]: {
    open: 6,
    close: 22,
  },
  [weekdays[5]]: {
    open: 6,
    close: 22,
  },
  [weekdays[6]]: {
    open: 6,
    close: 22,
  },
};

/** The RESTAURANT Constant */
const RESTAURANT = {
  name: 'Bhartiya_Restro',
  location: 'Near Sagwan Chonk, Sirsa',

  categories: ['Delhi Khana', 'Kerela Special', 'Punjabi Roti', 'Karnataka Dosa'],

  starterMenu: ['Roti', 'Sabji', 'Salad', 'Paratha'],
  mainMenu: ['Special', 'Lunch', 'Dinner', 'Breakfast'],

  openingHours,

  /**
   * Order food
   *
   * @param {number} starterIndex
   * @param {number} mainIndex
   * @returns
   */
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  /**
   * orderDelivery with multiple parameters to receive as object
   *
   * @param {object} param0
   */
  orderDelivery({ starterIndex, mainIndex, time, address }) {
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
  orderDeliveryDefault({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
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
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
  },

  /**
   * Order Pizza
   *
   * @param {string} mainIngredient
   * @param  {...string} otherIngredients
   */
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log('mainIngredient =', mainIngredient);
    console.log('otherIngredients =', otherIngredients);
  },
};

/* Looping Objects: Object Keys, Values, and Entries */
// Property Keys
const oKeys = Object.keys(openingHours);
console.log('oKeys =', oKeys);

let str1 = `We are open on ${oKeys.length} days: `;

for (const day of oKeys) {
  str1 += `${day}, `;
}
console.log('str1 =', str1);

// Property Values
const oValues = Object.values(openingHours);
console.log('oValues = ', oValues);

// Entire Object
const oEntires = Object.entries(openingHours);
console.log('oEntires = ', oEntires);

for (const [day, { open: o, close: c }] of oEntires) {
  let stmt = `On ${day} we open at ${o} and close at ${c}`;
  console.log(stmt);
}
