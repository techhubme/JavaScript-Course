console.log("**** Airthmatical Operator Example ****");

const X = 11;
const Y = 3;

console.log("X =", X, ",", "Y =", Y);
console.log("ADDITION :", X + Y);
console.log("SUBTRACTION :", X - Y);
console.log("MULTIPLICATION :", X * Y);
console.log("DIVISION :", X / Y);
console.log("REMINDER :", X % Y);

console.log("**** Assignment Operator Example ****");

let age = 25;
console.log("AGE :", age);

age++;
console.log("AGE ++ :", age);

age--;
console.log("AGE -- :", age);

age += 10;
console.log("AGE += 10 :", age);

age -= 10;
console.log("AGE -= 10 :", age);

age *= 10;
console.log("AGE *= 10 :", age);

age /= 10;
console.log("AGE /= 10 :", age);

age %= 10;
console.log("AGE %= 10 :", age);

age = 26;
console.log("AGE :", age);

console.log("**** Comparison Operator Example ****");

const MY_VAL = 7;
console.log("MY_VAL", MY_VAL);
console.log(MY_VAL, " > 10", MY_VAL > 10);
console.log(MY_VAL, " < 10", MY_VAL < 10);
console.log(MY_VAL, " >= 7", MY_VAL >= 7);
console.log(MY_VAL, " <= 7", MY_VAL <= 7);
console.log(MY_VAL, " == 7", MY_VAL == 7);
console.log(MY_VAL, " == '7'", MY_VAL == "7");
console.log(MY_VAL, " === '7'", MY_VAL === "7");
console.log(MY_VAL, " != 8", MY_VAL != 8);
console.log(MY_VAL, " != 7", MY_VAL != 7);

console.log("**** Logical Operator Example ****");

const A = 10;
const B = 20;

console.log("A =", A, ",", "B =", B);
console.log("A == 10 && B == 20", A == 10 && B == 20);
console.log("A == 20 && B == 10", A == 20 && B == 10);
console.log("A == 10 || B == 50", A == 10 || B == 50);
console.log("A == 50 || B == 20", A == 50 || B == 20);
console.log("!(A==10)", !(A == 10));
console.log("!(A==20)", !(A == 20));
