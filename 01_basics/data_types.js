//Data Types in JS

/**
 * JS supports 2 types of data type
 * a. Premitive Data Types-> String, number, null, undefined, symbol, boolean, BigInt
 * b. Refrence Data Types-> Array, Object
 */

// Premitive Data Types

let userName = "John Doe"; 
console.log(typeof userName);  //string

let contact = 9987434;
console.log(typeof contact); //number


//Implicit conversion
let implicitConverstionExample = 'Tim';
let result = 10 + implicitConverstionExample
console.log(result);// 10Tim 
console.log(typeof result); //string

let email;
console.log(typeof email); //undefined

const active = true ;
console.log(typeof active); //boolean

let number = BigInt (6766676766767676);
console.log(typeof number); //BigInt


//Booleans can be used to evalute condition 
let state = true;
if (state) {
    console.log("you can join our community");
}
else {
    console.log("you can not join our community");
}



let isWorking = null;
console.log(isWorking); //null
console.log(typeof isWorking); //object, its to maintain the compatibility with the old version


let check = Symbol('check');
console.log(check, typeof check);//Symbol(check) symbol
