// Operators

//1. Arithmatic Operators

let a = 90;
let b = 20;
let z = a + b;
let x = a - b;
let y = a * b;
let c = a / b;
let v = a % b;

console.log(z); //110
console.log(x); //70
console.log(y); //1800
console.log(c); //4.5
console.log(v); //10

//Exponent
let expo = 3;
let result = expo ** 2;
console.log(result);

//Increment
let num1 = 20;
console.log(++num1); //Pre-Increment, first increment then use
console.log(num1++); //Post-Increment, first use then increment


//Decrement
let num2 = 20;
console.log(--num2);


//Concatenation
let word = "Test" + "Code";
console.log(word); //TestCode


// Comparison

// Loose Equality: Performs type conversion before checking for equality
let x1 = 10;
let y2 = '10';
console.log(x1 == y2); // true (string '10' is converted to number 10)

// Strict Equality: Does not perform type conversion, directly compares values and types
let x3 = 10;
let y3 = '10';
console.log(x3 === y3); // false (number 10 is not equal to string '10')

