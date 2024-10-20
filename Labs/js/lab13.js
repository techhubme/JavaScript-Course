let input = prompt("Enter The Input");

input = Number(input);

console.log("INPUT", input);
console.log("typeof INPUT", typeof input);

if(input == 100){
    console.log("Input is 100 but datatype can be number or string (loose type checking)");
}

if(input === 100){
    console.log("Input is 100 and datatype is number (strict type checking)");
}

// if(input != 100){
//     console.log("Please type 100 only (loose type checking)");
// }

// if(input !== 100){
//     console.log("Please type 100 only (strict type checking)");
// }
