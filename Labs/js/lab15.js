const bill = 275;

let tip = (bill >= 50 && bill <= 300) ? 15 : 20;
tip = (bill * tip) / 100;

let value = bill + tip;

let message = `The bill was ${bill}, the tip was ${tip}, and the total value ${value}`;

console.log(message);
