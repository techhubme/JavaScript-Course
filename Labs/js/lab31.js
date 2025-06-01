'use strict';

/** The RESTAURANT Constant */
const RESTAURANT = {
  name: 'Bhartiya_Restro',
  location: 'Near Sagwan Chonk, Sirsa',
  categories: ['Delhi Khana', 'Kerela Special', 'Punjabi Roti', 'Karnataka Dosa'],
  starterMenu: ['Roti', 'Sabji', 'Salad', 'Paratha'],
  mainMenu: ['Special', 'Lunch', 'Dinner', 'Breakfast'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

/** USE CASE 1 */
const ARR_1 = [2, 4, 6];
const A = ARR_1[0];
const B = ARR_1[1];
const C = ARR_1[2];
console.log('A =', A, ', B =', B, ', C =', C);

/** USE CASE 2 */
const ARR_2 = [12, 14, 16];
const [D, E, F] = ARR_2;
console.log('D =', D, ', E =', E, ', F =', F);

/** USE CASE 3 */
let [starterMenu, mainMenu] = RESTAURANT.order(3, 1);
console.log('starterMenu =', starterMenu, ', mainMenu =', mainMenu);

/** USE CASE 4 */
const C1 = [22, 33, [44, 55]];
console.log('C1', C1);
const [cA, , cB] = C1;
console.log('cA =', cA, ', cB =', cB);
const [i, , [j, k]] = C1;
console.log('i =', i, ', j =', j, ', k =', k);

/** USE CASE 5 */
const [p, q, r] = [10, 12];
console.log('p =', p, ', q =', q, ', r =', r);

/** USE CASE 6 */
const [p2 = 1, q2 = 1, r2 = 1] = [14, 16];
console.log('p2 =', p2, ', q2 =', q2, ', r2 =', r2);

/** USE CASE 7 */
const [p3 = 1, q3 = 1, r3 = 1] = [18, , 20];
console.log('p3 =', p3, ', q3 =', q3, ', r3 =', r3);
