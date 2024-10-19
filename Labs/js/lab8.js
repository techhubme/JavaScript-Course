const NAME = "Ramesh Kumar";
const BIRTH_YEAR = 1988;
const YEAR_NOW = new Date().getFullYear();
const JOB = "Teacher";

const MSG1 = "Hello I'm "+NAME+" and I'm a "+(YEAR_NOW - BIRTH_YEAR)+" old "+JOB+".";
console.log(MSG1);

// USING ES6 (String Template Literals)
const MSG2 = `Hello I'm ${NAME} and I'm a ${(YEAR_NOW - BIRTH_YEAR)} old ${JOB}.`;
console.log(MSG2);

// Multiline Using String
const MSG3 = "Hello Line 1 \nLine 2 \nLine 3";
console.log(MSG3);

// Multiline ES6 (String Template Literals)
const MSG4 = `Hello Line 1 
Line 2 
Line 3`;
console.log(MSG4);
