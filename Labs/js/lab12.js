// Falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const MONEY = 0;
// const MONEY = 100;
if(MONEY){
    console.log("MONEY", MONEY);
}else{
    console.log("Not Having money.");
}