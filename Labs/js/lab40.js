'use strict';

const weekdays = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
const openingHours = {
  [weekdays[0]]: {
    open: 0,
    close: 22,
  },
  [weekdays[1]]: {
    open: 0,
    close: 22,
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

//console.log(RESTAURANT.openingHours.mon.open);
//console.log(RESTAURANT.openingHours.monday.open);

if (RESTAURANT.openingHours.monday) {
  console.log(RESTAURANT.openingHours.monday.open);
}

// USE CASE 1 Optional Chaining (?.)
console.log(RESTAURANT?.openingHours?.mon?.open);
console.log(RESTAURANT.openingHours.mon?.open);
console.log(RESTAURANT.openingHours.monday?.open);

// USE CASE 2
const daysTest = ['testDay', 'saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

for (const day of daysTest) {
  console.log('Day =', day);
  const open = RESTAURANT.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}`);
}

// USE CASE 3 With methods
console.log(RESTAURANT.order?.(0, 1) ?? 'Method does not exist.');
console.log(RESTAURANT.orderTest?.(0, 1) ?? 'Method does not exist.');

// USE CASE 4 With Arrays
const USERS = [{ name: 'Ram', email: 'ram@abc.com' }];
console.log('USER NAME [0]', USERS[0]?.name);
console.log('USER EMAIL [0]', USERS[0]?.email);

console.log('USER NAME [0]', USERS[1]?.name);
console.log('USER EMAIL [0]', USERS[1]?.email);

console.log('USER NAME [0]', USERS[1]?.name ?? 'No More Elements');
console.log('USER EMAIL [0]', USERS[1]?.email ?? 'No More Elements');
