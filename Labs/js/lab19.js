'use strict';

const PERSON = {

    firstName:"Krishan",

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
    },

    getFirstName: function(){
        return this.firstName;
    },

    getLastName: function(){
        return this.lastName;
    },

    getAge: function(){
        return this.age;
    },

    getProfession: function(){
        return this.profession;
    },

    getMobileNumbers: function(){
        return this.mobileNumbers;
    },

    isMarried: function(){
        return this.married;
    },

    getAddress: function(){
        return this.address;
    },

    getSummary: function(){
        return `Hello my name is ${this.firstName} ${this.lastName} I am ${this.age} old and I am ${this.profession} by profession,
        I stay at ${this.address.locality} in ${this.address.city} my twitter handle is ${this.twitter}`;
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

/** Functions of the Object */
console.log("PERSON NAME", PERSON.getFirstName(), PERSON.getLastName());
console.log("PERSON AGE", PERSON.getAge());
console.log("PERSON PROFESSION", PERSON.getProfession());
console.log("PERSON MARRIED", PERSON.isMarried());
console.log("PERSON MOBILENUMBERS", PERSON.getMobileNumbers());
console.log("PERSON ADDRESS", PERSON.getAddress());
console.log("PERSON SUMMARY", PERSON.getSummary());
