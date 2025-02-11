//Hoisting is a behaviour in Javascript where the variable and functions are moved or hoisted to the top of their scope during memory allocation  phase of execution context

//Hositing with var keyword

/**
 * Variables declared with the var keyword are hoisted and initialized as undefined
 */
// console.log(x);
// var x = 20; //undefined

// console.log(test); //will print entire functions as function declaration and function body is fully hoisted

// // console.log(x); //Reference error 

// function test() {
//     console.log(x); //undefined
//     var x = 20; 
//     console.log(x);//20
//     console.log("Hello");
// }
// console.log(test()); // function execution output and test() does not return anything, so console.log(test()) prints "undefined".


// console.log(a); // undefined
// var a = 10;
// console.log(b); // Reference Error as let are hosited but remain in the TDZ
// let b = 20;

// function foo() {
//   console.log(x); // never executes due to reference error at line number 26
//   var x = 5;
//   console.log(y); // never executes due to reference error at line number 26
//   let y = 15;
// }

// foo();//never executes due to reference error at line number 26
// console.log(a); // never executes due to reference error at line number 26
// console.log(b); // never executes due to reference error at line number 26



// console.log(x);; //Functions are fully hoisted therefore it worked

// var x = function check() {
//     let z = 10;
//     console.log(z);
// }


// console.log(a); //Reference error and execution will stop
// let a;
// console.log(a);


// greet(); 
// function greet() {
//   console.log('Hello, World!'); // 2 times Hello, World!
// }
// greet();


// console.log(foo); // function [Function :foo]
// function foo() {
//   console.log('Function declaration executed'); //Function declaration executed
// }
// foo();


// foo();
// var foo = function () {
//   console.log('Function expression executed'); // foo is initilized as undefined, and this foo is an function expression thus calling this is calling as undefined, there fore reference error
// };
// foo();


// console.log(test); //undefined
// var test = () => {
//   console.log('Arrow function executed');
// };
// test();//not sure wehter it will give error or not


// function alpha() {
//   beta();
//   console.log('Inside alpha');
// }

// function beta() {
//   console.log('Inside beta');
// }

// console.log('Start'); //Start-Inside beta- Inside alpha - End
// alpha();
// console.log('End');


// console.log(myFunc); //Reference Error, rest will not execute
// let myFunc = function () {
//   console.log('Function Expression with let');
// };
// myFunc();


// function first() {
//   console.log(second); //undefined
//   var second = function () {
//     console.log('Second function'); // Second Function
//   };
//   second();
// }
// first();


// (function () {
//   console.log('IIFE executed'); //IIFE executed
// })();


// check();
// var check = function () {
//   console.log('Function expression'); //var is undefined therefore not execute
// };
// check();


// function outer() {
//   inner();
//   function inner() {
//     console.log('Inner function executed'); //Inner function executed
//   }
// }
// outer();


// console.log(add);
// let add = function (a, b) {
//   return a + b;
// };
// console.log(add(2, 3));


// function outer() {
//   console.log(inner);
//   function inner() {
//     console.log('Inner function executed');
//   }
//   inner();
// }
// outer();


// console.log(test); //undefined
// var test = () => console.log("Arrow function executed"); //Arrow function executed
// test();


// console.log(a); //Reference error, execution stops
// let a = 10;
// console.log(a);


// func(); //Reference error
// let func = function () {
//   console.log('Function Expression with let');
// };
// func();


// console.log(foo); //undefined
// var foo = (function () {
//   console.log('IIFE Running'); //IIFE Running
// })();
// console.log(foo);//undefined as there is no return statement, if not return statement is provided an implicit undefined is returned

// console.log(foo);
// foo();

// var foo = function () {
//   console.log('Function executed');
// };

// foo();
// console.log(foo);

// function foo() {
//   console.log('Function executed');
// }

// console.log(foo);
// foo();

// var foo = function () {
//   console.log('Function executed');
// };


// foo();
// console.log(foo);

// function foo() {
//   console.log('Function executed');
// }


// console.log(bar); //undefined
// bar(); //Type error

// var bar = function () {
//   console.log('Function Expression Executed');
// };


console.log(foo);
console.log(typeof foo);

var foo = function () {
  console.log('Hello from foo');
};


console.log(foo);
console.log(typeof foo);

var foo = function () {
  console.log('Hello from foo');
};
