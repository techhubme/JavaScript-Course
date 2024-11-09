'use strict';

const PERSON = {
    firstName:"Harish",
    lastName:"Kumar",
    age:31,
    profession:"Teacher",
    mobileNumbers:[4567, 9876],
    married:true,
    address:{
        locality:"Near Govt. School",
        city:"Chandigarh",
        state:"Haryana",
        pinCode:123456,
    }
}

console.log("PERSON = ",PERSON);
console.log("TYPE OF PERSON = ",typeof PERSON);

/** Accessing the properity of object by . DOT*/
console.log("First Name = ", PERSON.firstName)
console.log("First Name = ", PERSON.lastName)

/**Accessing the object prolerity by Bracket Notation */
console.log("First Name = ", PERSON["firstName"])
const nameKey = "Name";
console.log("First Name = ", PERSON["first"+nameKey])
console.log("First Name = ", PERSON["last"+nameKey])

let propName = prompt("What you want to know about person ?");
alert(`${propName} is ${PERSON[propName]}`);

let personInfo = `Hello friends my name is ${PERSON.firstName} ${PERSON.lastName}, I am ${PERSON.age} years old,
my profession is ${PERSON.profession} and I stay at ${PERSON.address.locality} in ${PERSON.address.city}, ${PERSON.address.state}`;

alert(personInfo);


/** Add another Properity to Object */
PERSON['twitter'] = '@hellojs'  // Only sample data
console.log("PERSON = ",PERSON);
