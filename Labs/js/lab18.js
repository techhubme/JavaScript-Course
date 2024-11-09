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

/** Iterating using forEach */
FRIENDS.forEach(function (element){
    console.log("Element = ",element);
});

// Methods of the Array
/** Push the element (add new element at last) */
FRIENDS.push("X");
FRIENDS.push("Y");
let newLength = FRIENDS.push("Z");
console.log("FRIENDS = ", FRIENDS);
console.log("NEW LENGHT = ", newLength);

/** Unshift Method add element at first index */
newLength = FRIENDS.unshift("Purshtom");
console.log("FRIENDS = ", FRIENDS);
console.log("NEW LENGHT = ", newLength);

/** pop method removes the last elements */
let removedElement = FRIENDS.pop();
console.log("FRIENDS = ", FRIENDS);
console.log("REMOVED ELEMENT = ", removedElement);

/** shift remove the first element from array */
removedElement = FRIENDS.shift();
console.log("FRIENDS = ", FRIENDS);
console.log("REMOVED ELEMENT = ", removedElement);

/** Get the index of element */
let elemIdx = FRIENDS.indexOf("Prem");
console.log("INDEX OF ELEMENT = ", elemIdx);

/** includes checks that the elements existes or not */
let isIncluded = FRIENDS.includes("Naresh");
console.log("INCLUDES Naresh = ", isIncluded);
isIncluded = FRIENDS.includes("Sonu");
console.log("INCLUDES Sonu = ", isIncluded);
isIncluded = FRIENDS.includes("Sreenivas");
console.log("INCLUDES Sreenivas = ", isIncluded);

