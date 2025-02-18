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

