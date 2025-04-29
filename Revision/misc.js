// // //var,let, const

// // let a = 50;
// // function test() {
// //   var a = 10;
// //   let b = 50;
// //   if (true) {
// //     let a = 40;
// //     var b = 60; //A variable declared with let cannot be redeclared with var in the same scope — doing so causes a SyntaxError.
// //     console.log(b);
// //   }
// // }
// // test();

// //map() polyfill,
// /**
//  * It takes a callback function and returns a new array where each element is the result of applying the callback to the original elements.

// It does not modify the original array.

// In my polyfill, I looped through the array, applied the callback to each element, and pushed the result into a new array.

// I also handled an edge case where the input must be a function.} callBack
//  *
//  */

// //making our custom map function to be available and usable method
// Array.prototype.myMap = function (callBack) {
//   //edge case
//   if (typeof callBack !== 'function') {
//     throw new TypeError(`Callback must be a function, received ${callBack}`);
//   }
//   //new array
//   const newArr = [];

//   for (let i = 0; i < this.length; i++) {
//     newArr.push(callBack(this[i], i, this));
//   }
//   return newArr;
// };
// const arr = [34, 1, 25, 67, 9];
// const result = arr.myMap((i, index, self) => {
//   return i / 2;
// });
// console.log(result);

// //filter() - filter is an high order array method that takes an callback fuction returns a new array for those who satisfy the filter criteria
// /**
//  * filter is a high-order method that creates a new array including only those elements that pass a condition specified by the callback function.

// It also does not mutate the original array.

// In my polyfill, I looped through the array, checked if the callback returns true for the element, and if yes, I pushed it to the new array.

// I also made sure to skip missing array slots using hasOwnProperty.
//  */

// Array.prototype.myFilter = function (callback) {
//   if (typeof callback !== 'function') {
//     throw new TypeError(`Callback must be a function`);
//   }
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (this.hasOwnProperty(i)) {
//       if (callback(this[i], i, this)) {
//         newArr.push(this[i]);
//       }
//     }
//   }
//   return newArr;
// };

// const arr1 = [34, 1, 25, 67, 9];
// const result2 = arr1.myFilter((i, index, self) => {
//   return i % 5 !== 0;
// });
// console.log(result2);

// //reduce() reduce is an high order array method that takes two arguments a callback function and initial value, it accumulates the results we can also providea an initial value to the accumulator and returns its result

// /**
//  * reduce is a high-order method that reduces an array to a single value by applying a callback function that carries an accumulator.

// It takes two arguments: a callback and an optional initial value.

// In my polyfill, I initialized the accumulator either with the provided initial value or the first element of the array.

// Then, I looped through the array, updating the accumulator based on the callback output.

// I also handled the case where no initial value is passed.
//  */
// Array.prototype.myReduce = function (callback, cVal) {
//   if (typeof callback !== 'function') {
//     throw new TypeError(`Callback must be a function`);
//   }

//   let acc = cVal !== undefined ? cVal : this[0];
//   let index = cVal !== undefined ? 0 : 1;
//   for (let i = index; i < this.length; i++) {
//     if (this.hasOwnProperty(i)) {
//       acc = callback(acc, this[i], i, this);
//     }
//   }
//   return acc;
// };

// const arr2 = [34, 1, 25, 67, 9];
// const result3 = arr2.myReduce((acc, cVal) => {
//   return acc + cVal;
// }, 0);
// console.log(result3);

// const words = ['apple', 'banana', 'cherry'];
// const newWords = words.map((i) => {
//   return i.charAt(0).toUpperCase() + i.slice(1);
// });
// console.log(newWords);

// const arr = [1, 'apple', true, 'banana', 42, 'cherry', false];
// const arrString = arr
//   .filter((i) => typeof i === 'string')
//   .map((i) => i.toUpperCase());
// console.log(arrString);

// const arr = [1, 2, 3];
// const result = arr.map((x) => [x, x * 2]);
// console.log(result);

// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// console.log({} + {});

// console.log(true + true + false + 1 + '1' + 0);
// // true =1 therefore true + true => 1+1 =2
// //2+false => 2+0 =2
// //2+1 => 3
// //3+'1' => "31"
// //"31"+0 => 310

// console.log([] + {} + [] + '1' - 1); //NaN
// //[] => "" string
// // ""+{} => [object Object]
// //[object Object] +"1" = "[object Object]1"
// // "[object Object]1" -1 =>her the string will be converted to number since [object Object] cant be converted therefore NaN

console.log(([] == ![]) == [] + []);

//([] == ![]) => true
//true == "" => 1 == 0 false
//false + [] => 0 +"" => 0

console.log(Boolean([]));

const obj = {
  name: 'Alice',
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`);
    }, 1000);
  },
};

obj.greet();

function greet(name, callback) {
  console.log('Hello, ' + name);
  callback();
}

function farewell() {
  console.log('Goodbye!');
}

greet('Alice', farewell);

function greet() {
  console.log(this);
}

const obj = {
  name: 'Alice',
  greet: greet,
};

obj.greet();


// Create a simple counter using Closure.
function counter(){
let count=0;
 return function counterInner(){
count++;
    console.log(count);
  }
}
const start = counter();
start();
start();
start();


//bind()

Function.prototype.myBind = function (currentContext, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} must be a function`);
  }

  const original = this;

  return function (...otherArg) {
    return original.apply(currentContext,[...args,...otherArg])
  }
}

function getDetails(profession,age) {
  console.log(`Hello ${this.name} you are a ${profession} and your age is ${age}`);
}
const obj1 = {
  name:"Krishna"
}
const result = getDetails.myBind(obj1,"engineer");
result(28);


function a() {
  console.log(this);
}
a();




function test() {
  for (var i = 0; i < 3; i++){
    setTimeout(() => {
      console.log(i); // var is function scoope so by the time settime is executed the current refernce to i is printed
    }, 1000);
  }
}

test();



function test() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i); 
    }, 1000);
  }
}

test();




function test() {
  for (var i = 0; i < 3; i++) {
    function inner(i){
    setTimeout(() => {
      console.log(i);
    }, 1000);
    }
    inner(i);
  }
}

test();