'use strict';

/** Printin without for loop */
console.log("-------- Printin without for loop  ---------");
console.log("Sr. 1");
console.log("Sr. 2");
console.log("Sr. 3");
console.log("Sr. 4");
console.log("Sr. 5");
console.log("Sr. 6");
console.log("Sr. 7");
console.log("Sr. 8");
console.log("Sr. 9");
console.log("Sr. 10");

/** Using for loop to print the same as above */
console.log("-------- Using for loop to print the same as above  ---------");
for(let i = 1; i <= 10; i++){
    console.log(`Sr. ${i}`); 
}

/** Array Iteration using For Loop */
console.log("-------- Array Iteration using For Loop ---------");
const MY_ARRAY= ["Krishan", "Kumar", 23, true, "Teacher", ["Ram", "Shiv", "Vishnu"], "Chandigarh"];
console.log("MY ARRAY = ", MY_ARRAY);

console.log("PRINTING USING ARRAY");
const MY_ARRAY_TYPES = [];

for(let i=0; i< MY_ARRAY.length; i++){
    let element = MY_ARRAY[i];
    let type = typeof element;
    console.log("Element =", element,": Type =", type);
    MY_ARRAY_TYPES.push(type);
}
console.log("MY_ARRAY_TYPES", MY_ARRAY_TYPES);

/** Showing the use of continue statement in loop */
console.log("-------- Showing the use of continue statement in loop ---------");

for(let i=0; i< MY_ARRAY.length; i++){
    if(typeof MY_ARRAY[i] !== "string"){
        continue;
    }
    console.log(MY_ARRAY[i]);
}

/** Showing the use of break statement in loop */
console.log("-------- Showing the use of break statement in loop ---------");

for(let i=0; i< MY_ARRAY.length; i++){
    if(typeof MY_ARRAY[i] === "number"){
        break;
    }
    console.log(MY_ARRAY[i]);
}
