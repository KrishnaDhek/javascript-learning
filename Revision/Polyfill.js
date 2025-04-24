//Polyfills revision
//Polyfill for map() - map is an hight order array method that takes an callback function and return a new array

//add the custom method to the array prototype so that it is available to all
Array.prototype.myMap = function (callback) {
  if (typeof callback !== 'function') {
    throw new TypeError(`Callback must be an function. Recevied ${callback}`)
  }
  //empty array
  let result = [];
  
  for (let i = 0; i < this.length; i++){
    result.push(callback(this[i], i, this));
  }

  return result;
}

const myArr = [45, 3, 63, 12, 6];
let arrResult = myArr.myMap((item, index, self) => {
  return item*2;
})
console.log(arrResult);


//Polyfill for call() - call() is a method of function instance that is used to call a function with current context and number of arguments
Function.prototype.myCall = function (currentContext, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} must be a function`);
  }
  currentContext.newFun = this;
  currentContext.newFun(...args);
  delete currentContext.newFun;
}

const obj = {
  name: "Krishna",
  profession:"Engineer"
}
function printDetails(age) {
  console.log(`Hello ${this.name} your age is ${age} and you are a ${this.profession}`);
}
printDetails.myCall(obj, 28);

//Pollyfill for apply() - apply() is a method that takes the current context and array of arguments or undefined
Function.prototype.myApply = function (currentContext, args) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} must be a function`);
  }

  if (args !== null && !Array.isArray(args)) {
    throw new TypeError(`Second argument must be array or undefined`);
  }

  currentContext.newFun = this;
  currentContext.newFun(...args);
  delete currentContext.newFun;
}


const obj1 = {
  firstName: "Vinita",
  lastName:"Dhek"
}

function printDetails(age, noChild) {
  console.log(`Hello ${this.firstName} ${this.lastName} your age is ${age} and you have ${noChild} childrens`);
}

printDetails.myApply(obj1, [58, 3]);


//Polyfill for bind() -  bind() is a method that takes two arguments the current context for which it is called and number of argumnets, this returns a function that is called to invoke the function

Function.prototype.myBind = function (currentContext, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} must be a function`)
  }

  const originalFun = this;
  
  return function(...otherArg) {
    
   return originalFun.myApply(currentContext,[...args,...otherArg]);
    
  }
}

const obj2 = {
  name: "Eva",
}
function printDetails(message ,lastName,age) {
  console.log(`${message}: Hello ${this.name} your last name is ${lastName} and age is ${age}`);
}

const returnFun = printDetails.myBind(obj2, "Details" )
returnFun('Mehra', 5);