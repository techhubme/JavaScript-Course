'use strict';

/** Example for while loop */
console.log("******* Example showing use of while loop *******");
let iteration = 0;

while(iteration <= 10){
    console.log("ITERATION =",iteration);
    iteration++;
}

/** Example to show the real use case of while loop */
console.log("*******  Example to show the real use case of while loop *******");

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice!=6){
    console.log("DICE =",dice);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice==6){
        console.log("LOOP IS TERMINATING");
    }
}
console.log(`Got the required dice value ${dice}`);

