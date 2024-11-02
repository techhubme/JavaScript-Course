'use strict';

/** Creating the array */
const FRIENDS = ["Sumit","Sreenivas","Prem","Kuldeep","Diwaker"];
// const FRIENDS = new Array("Sumit","Sreenivas","Prem","Kuldeep","Diwaker");

/** Showing array's size */
console.log("Array Size", FRIENDS.length);

/** Showing array's all elements */
console.log("ARRAY's Elements", FRIENDS);

/** Accessing the individuals element */
console.log("1st Element", FRIENDS[0]);
console.log("3st Element", FRIENDS[2]);
console.log("Last Element", FRIENDS[FRIENDS.length-1]);

/** Replacing the existing elements */
FRIENDS[3] = "Naresh Kumar"

/** Adding new elemnts to array */
FRIENDS[FRIENDS.length] = "Harish Kumar";

/** Showing array's Elements */
console.log("ARRAY's Elements", FRIENDS);

/** Array's Methods */
