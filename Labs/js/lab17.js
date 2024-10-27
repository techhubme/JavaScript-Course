'use strict';

// Calling logMessage function
logMessage();

// Calling logMessage function
logMessage2("WELCOME TO JAVA SCRIPT");

// Calling sumOf function
let sum = sumOf(7, 3);
logMessage2(`Sum = ${sum}`);

// Calling sumOf function
sum = sumOf(55, 3);
logMessage2(`Sum = ${sum}`);

/**
 * Function Declarations
 * 
 * Log the default message to the log.
 */
function logMessage() {
    console.log("::::: HELLO WORLD :::::");
}

/**
 * Function Declarations
 * 
 * Log the given message to log.
 * 
 * @param {*} message 
 */
function logMessage2(message) {
    console.log(message);
}

/**
 * Function Declarations
 * 
 * Do the sum of two numbers a and b.
 * 
 * @param {*} a the first number
 * @param {*} b the second 
 * @returns the sum of two number.
 */
function sumOf(a, b) {
    return a + b;
}

// Calling calculateAge function (Has error because of Function Expressions)
// let age = calculateAge(1996);
// logMessage2(`Age = ${age}`);

/**
 * Function Expressions 
 * 
 * Calculate the age of person.
 * 
 * @param {*} birthYear 
 * @returns number, the age of person
 */
let calculateAge = function (birthYear) {
    let currentYear = new Date().getFullYear();
    console.log("CURRENT YEAR", currentYear);
    return currentYear - birthYear;
}

// Calling calculateAge function (Has no error for Function Expressions)
let age2 = calculateAge(1996);
logMessage2(`Age = ${age2}`);

/**
 * Arrow Function 
 * 
 * Multiply two numbers a and b, and return the result.
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns number, the multiplication of a and b.
 */
let multiply = (a, b) => {
    return a * b;
}

// Calling multiply function
let multiplication = multiply(7, 8);
logMessage2(`Multiplication = ${multiplication}`);

/**
 * Cut the given fruits into given numbers.
 * 
 * @param {*} noOfFruits the number of fruts.
 * @param {*} parts cut into given parts.
 * @returns 
 */
function cutFruit(noOfFruits, parts) {
    console.log(`Cutting Fruit in ${parts} parts`);
    return noOfFruits * parts;
}

/**
 * Fruit processor function to make a juice out of fruits.
 * 
 * @param {*} apple number of apple
 * @param {*} orange number of orange
 * @returns String, a message for juice.
 */
function fruitProcessor(apple, orange, cutParts) {

    // Calling cutFruit function
    cutFruit(apple, cutParts);
    // Calling cutFruit function
    cutFruit(orange, cutParts);

    console.log("Processing the fruits.....");
    return `Fruit Juice made from ${apple} apples and ${orange} oranges`;
}

// Calling fruitProcessor function
let juice = fruitProcessor(3, 4, 5);
logMessage2(`Juice = ${juice}`);
