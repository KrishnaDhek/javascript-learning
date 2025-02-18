// function funC(a, b) {
//     return a + b;
// }
// console.log(funC(2400, 450));


// //arrow function

// let result = (a) => {
//     return a * a;
// }

// console.log(result(5));

// //Factorial

// let fact = (n)=>{
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     else {
//         return n * fact(n - 1);
//     }
// }

// console.log("Factorial of the given number is: " + fact(5));


// //Immediately Invoked Function Expression

// let sqaure = (function (a) {
//     return a * a;
// })(12);

// console.log(sqaure);



// function test() {
//     console.log(a);
//     var a = 20;
//     console.log(a);
// }
// test();


//Advanced Functions

//Name Function-A function which has a name and can be called using that name, they can be called before declaration, as function name are hoisted
funName();//due to hosting

function funName() {
    console.log("hello, this is an name function");
}


//Anonymous Function- A function with out a name, often assigned to a variable
// console.log(result(4, 2)); //ReferenceError: Cannot access 'result' before initialization, because anonymouse functions are not hosited 
let result = function (param1, param2) {
    return param1 * param2;
}
console.log(result(4, 2));//8

//High-Order Functions- In Js a functions can be passed as argument to another functions, also a function can return another functions, such functions are called as hight-order functions

// function operation(fun, param1, param2) {
//     return fun(param1, param2);
// }

// function multi(param1, param2) {
//     return param1 * param2;
// }

// console.log(operation(multi,10,5));

// function verification(fun, param) {
//     return fun(param);
// }

// function check(param) {
//     if (param >= 18) {
//         return `Persons age is ${param}, therefore valid`;
//     }
//     else {
//         return `Persons age is ${param}, therefore not valid`;
        
//     }
// }

// console.log(verification(check,10));


// function demo(fun, n) {
//     return `Hello, ${fun(n)}`;
// }

// function nameUser(n) {
//     return n;
// }

// console.log(demo(nameUser,20));


// Immediatley Invoked Function Expression -are those functions that are executed immediately 
(function () {
    console.log("This is an example for IIFE");
})();

(() => console.log("this is also an IIFE, but using arrow function declaration"))();


