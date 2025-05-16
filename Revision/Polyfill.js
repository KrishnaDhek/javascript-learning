// //Polyfills revision
// //Polyfill for map() - map is an hight order array method that takes an callback function and return a new array

// //add the custom method to the array prototype so that it is available to all
// Array.prototype.myMap = function (callback) {
//   if (typeof callback !== 'function') {
//     throw new TypeError(`Callback must be an function. Recevied ${callback}`);
//   }
//   //empty array
//   let result = [];

//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }

//   return result;
// };

// const myArr = [45, 3, 63, 12, 6];
// let arrResult = myArr.myMap((item, index, self) => {
//   return item * 2;
// });
// console.log(arrResult);

// //Polyfill for call() - call() is a method of function instance that is used to call a function with current context and number of arguments
// Function.prototype.myCall = function (currentContext, ...args) {
//   if (typeof this !== 'function') {
//     throw new TypeError(`${this} must be a function`);
//   }
//   currentContext.newFun = this;
//   currentContext.newFun(...args);
//   delete currentContext.newFun;
// };

// const obj = {
//   name: 'Krishna',
//   profession: 'Engineer',
// };
// function printDetails(age) {
//   console.log(
//     `Hello ${this.name} your age is ${age} and you are a ${this.profession}`
//   );
// }
// printDetails.myCall(obj, 28);

// //Pollyfill for apply() - apply() is a method that takes the current context and array of arguments or undefined
// Function.prototype.myApply = function (currentContext, args) {
//   if (typeof this !== 'function') {
//     throw new TypeError(`${this} must be a function`);
//   }

//   if (args !== null && !Array.isArray(args)) {
//     throw new TypeError(`Second argument must be array or undefined`);
//   }

//   currentContext.newFun = this;
//   currentContext.newFun(...args);
//   delete currentContext.newFun;
// };

// const obj1 = {
//   firstName: 'Vinita',
//   lastName: 'Dhek',
// };

// function printDetails(age, noChild) {
//   console.log(
//     `Hello ${this.firstName} ${this.lastName} your age is ${age} and you have ${noChild} childrens`
//   );
// }

// printDetails.myApply(obj1, [58, 3]);

// //Polyfill for bind() -  bind() is a method that takes two arguments the current context for which it is called and number of argumnets, this returns a function that is called to invoke the function

// Function.prototype.myBind = function (currentContext, ...args) {
//   if (typeof this !== 'function') {
//     throw new TypeError(`${this} must be a function`);
//   }

//   const originalFun = this;

//   return function (...otherArg) {
//     return originalFun.myApply(currentContext, [...args, ...otherArg]);
//   };
// };

// const obj2 = {
//   name: 'Eva',
// };
// function printDetails(message, lastName, age) {
//   console.log(
//     `${message}: Hello ${this.name} your last name is ${lastName} and age is ${age}`
//   );
// }

// const returnFun = printDetails.myBind(obj2, 'Details');
// returnFun('Mehra', 5);

// //filter()

// Array.prototype.myFilter = function (callback) {
//   if (typeof callback !== 'function') {
//     throw new TypeError(`Callback must be a function, received ${callback}`);
//   }

//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// };

// const myArr1 = [78, 54, 66, 78, 33, 55];
// const result1 = myArr1.myFilter((i) => {
//   return i % 11 != 0;
// });
// console.log(result1);

// //reduce()
// Array.prototype.myReduce = function (callBack, cVal) {
//   if (typeof callBack !== 'function') {
//     throw new TypeError(`Callback must be a function,Received ${callBack} `);
//   }
//   let acc = cVal !== undefined ? cVal : this[0];
//   let index = cVal !== undefined ? 0 : 1;
//   for (let i = index; i < this.length; i++) {
//     acc = callBack(acc, this[i], i, this);
//   }

//   return acc;
// };
// const myArr2 = [78, 54, 66, 78, 33, 55];
// const result2 = myArr2.myReduce((acc, cVal) => {
//   return acc + cVal;
// }, 0);
// console.log(result2);

// //find()
// Array.prototype.myFind = function (callBack) {
//   if (typeof callBack !== 'function') {
//     throw new TypeError(`Callback must be a function`);
//   }
//   for (let i = 0; i < this.length; i++) {
//     if (callBack(this[i], i, this)) {
//       return this[i];
//     }
//   }
// };
// const arr1 = [34, 55, 61, 9, 0];
// const result2 = arr1.myFind((i) => {
//   return i == 55;
// });
// console.log(result2);

// //some()
// Array.prototype.mySome = function (callBack) {
//   if (typeof callBack !== 'function') {
//     throw new TypeError(`Callback must be a function`);
//   }
//   for (let i = 0; i < this.length; i++) {
//     if (callBack(this[i], i, this)) {
//       return true;
//     }
//   }
//   return false;
// };
// const arr1 = [34, 55, 61, 9, 0];
// const result3 = arr1.mySome((i) => {
//   return i % 2 == 0;
// });
// console.log(result3);

// //every()
// Array.prototype.myEvery = function (callBack) {
//   if (typeof callBack !== 'function') {
//     throw new Error(`Callback must be a function`);
//   }
//   for (let i = 0; i < this.length; i++) {
//     if (!callBack(this[i], i, this)) {
//       return false;
//     }
//   }
//   return true;
// };

// const arr1 = [34, 55, 61, 9, 0];
// const result3 = arr1.myEvery((i) => {
//   return i % 2 == 0;
// });
// console.log(result3);

//Map Polyfill
Array.prototype.myMap = function (callBack) {
  if (typeof callBack !== 'function') {
    throw new Error(`${callBack} is not a function`)
  }
  const arr = new Array(this.length);
  for (let i = 0; i < this.length; i++){
    if (i in this) {
       arr[i] = callBack(this[i], i, this);
       
    }
   
  }
  return arr;
}

const items = [4, 5, , , , 6, 7, 8];
const answer = items.myMap((item, index, items) => {
  return item * 2;
})
console.log(answer);


//Filter Polyfill
Array.prototype.myFilter = function (callBack) {
  if (typeof callBack !== 'function') {
    throw new Error(`${callBack} is not a function`);
  }

  const result = [];

  for (let i = 0; i < this.length; i++){
    if (i in this) {
      if (callBack(this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }
  return result;
}

const arrItem = [2, 3, 45, 9, 18];

const newArrItem = arrItem.myFilter((item, index, arrItem) => {
  return item % 3 == 0;
})
console.log(newArrItem);