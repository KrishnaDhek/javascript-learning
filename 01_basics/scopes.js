// // //Scopes
// // /**
// //  * Scopes in JavaScript:
// //  * a. Global Scope
// //  * b. Function Scope
// //  * c. Block Scope
// //  */

// // /**
// //  * Global Scope - Variables declared in the global scope are accessible throughout the program.
// //  */
// // let name = 'Global Scope!';
// // function fun() {
// //   console.log(name); //  Accessible inside function (global scope)
// // }
// // console.log(name); //  Accessible outside function (global scope)
// // fun();

// // /**
// //  * Function Scope - Variables declared inside a function are accessible only within that function.
// //  */
// // function scopeFun() {
// //   let x = 20;
// //   console.log(x); //  Accessible inside the function
// // }
// // scopeFun();
// // // console.log(x); //  Error: x is not defined (out of function scope)

// // /**
// //  * Block Scope - Variables declared with `let` and `const` are only accessible inside the block `{}`.
// //  */
// // if (true) {
// //   let item = 'pen';
// //   const cost = 20;
// //   var color = 'blue'; // var is NOT block-scoped!

// //   console.log('cost ' + cost); //  Works (inside block)
// //   console.log(color); //  Works (inside block)
// // }

// // // console.log(item); //  Error: item is not defined (block-scoped)
// // // console.log(cost); //  Error: cost is not defined (block-scoped)
// // console.log(color); //  Works because `var` does NOT have block scope


// // function a() {
// //   console.log(b);
// //   let x = 10;
// //   c();
// //   function c() {
// //     console.log(b);
// //     console.log(x);
// //   }
// // }
// // a();
// // const b = 20;



// //Practice Question
// let a = 5;

// function test() {
//   console.log(a); //Reference Error, as a is a local varaible with let, due to hoisting it remains in the Temporal Dead Zone
//   let a = 10;
// }

// test();



// let x = 100;

// function outer() {
//   let x = 50;

//   function inner() {
//     console.log(x);//50, local scope
//   }

//   inner();
// }

// outer();


// function example() {
//   console.log(y);//undefined
//   var y = 30;
//   console.log(y);//30
// }

// example();


// if (true) {
//   var y = 10; //does not have block scope.
//   let b = 20; //is block-scoped.
// }

// console.log(y);//10
// console.log(b);//Reference Error


// function outer() {
//     var num = 42;  // `num` is declared and assigned 42

//     function inner() {
//         console.log(num);  //Looks for `num` in its scope chain
//     }

//     num = 100;  //  `num` is reassigned before `inner` is returned

//     return inner;
// }

// const fn = outer(); //  `fn` now holds the `inner` function
// fn(); // ⏩ Executes `inner()`


for (var i = 0; i < 5; i++) {
  
  function inner(i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  inner(i);
  
}