//Polyfills

//map()
Array.prototype.myMap = function (callback) {
  if (typeof callback !== 'function') {
    throw new Error(`Callback must be a function. Received ${callback}`);
  }
  //map returns a new array
  let newArr = [];
  for (let i = 0; i < this.length; i++){
    newArr.push(callback(this[i], i, this));
  }
  return newArr;

}

const arr = [5, 6, 7, 8, 9];
const result = arr.myMap((i, index, self) => {
  return i*4
})
console.log(result);


//forEach()
Array.prototype.myForEach = function (callback) {
  if (typeof callback !== 'function') {
    throw new Error(`Callback must be a function. Received ${callback}`);
  }
  for (let i = 0; i < this.length; i++){
    callback(this[i], i, this);
  }
}

const a = [3, 4, 5, 6];
a.myForEach((i, index, self) => {
  console.log(`the item is ${i} at index ${index} in the array ${self}`);
})

//call()
Function.prototype.myCall = function (currentContext, ...args) {
  if (typeof this!== 'function') {
    throw new Error(`Callback must be a function. Received ${this}`);
  }
  currentContext.funC = this;
  currentContext.funC(...args);
  delete currentContext.funC;
}

const obj1 = {
  name: "krishna",
  getDetails: getDetails,
}

const obj2 = {
  name:"Vinita"
}

function getDetails(age, status) {
  console.log(`Hello ${this.name} your age is ${age} and your status is ${status}`);
}

getDetails.myCall(obj1, 28, "active");
getDetails.myCall(obj2, 58, "active");


//find()
Array.prototype.myFind = function (callback) {
  if (typeof callback !== 'function') {
    throw new Error(`Callback must be a function, Received ${callback}`);
  }
  for (let i = 0; i < this.length; i++){
    if (this.hasOwnProperty(i)) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
  }
  return undefined;
}
const arrayItem = [12, 32, 45, 6, 78, 9];
const item = arrayItem.myFind((i) => {
  return i % 4 != 0;
})
console.log(item);


//some()
Array.prototype.mySome = function (callback) {
  if (typeof callback !== 'function') {
    throw new Error(`Callback must be a function, Received ${callback}`);
  }
  for (let i = 0; i < this.length; i++){
    if (this.hasOwnProperty(i)) { //checking if i is an actual element in the array not an empty item
      if (callback(this[i], i, this)) {
        return true;
      }
    }
  }
  return false;
}
const Aitems = [34, 56, 78, 12, 9];
const ans =Aitems.mySome((i) => {
  return i % 2 !== 0;
})
console.log(ans);

//every()
Array.prototype.myEvery = function (callback) {
  if (typeof callback !== 'function') {
    throw new Error(`Callback must be a function, Received ${callback}`);
  }

  for (let i = 0; i < this.length; i++){
    if (this.hasOwnProperty(i)) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
  }
  return true;
}


const A_items = [34, 56, 78, 12, 92];
const ans1 =A_items.myEvery((i) => {
  return i % 2 == 0;
})
console.log(ans1);




//reduce()

Array.prototype.myReduce = function (callback, cVal) {
  if (typeof callback !== 'function') {
    throw new Error(`Callback must be a function, Received ${callback}`);
  }

  let acc = cVal !== undefined ? cVal : this[0];
  let index = cVal !== undefined ? 0 : 1;
  for (let i = index; i < this.length; i++){
    if (this.hasOwnProperty(i)) {
      acc = callback(acc, this[i], i, this);
    }
  }
  return acc;
}

const elements = [34, 5, 1, 2, 50];
const result1 = elements.myReduce((acc, cVal) => {
  return acc + cVal;
}, 0);
console.log(result1);



//filter()

Array.prototype.myFilter = function (callback) {
  if (typeof callback !== 'function') {
    throw new Error(`Callback must be a function, Received ${callback}`);
  }
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

const elements1 = [34, 95, 101, 2, 50];
const result2 = elements1.myFilter((i) => {
  return i>40;
});
console.log(result2);


//apply()

Function.prototype.myApply = function (currentContext, arg) {
  if (typeof this !== 'function') {
    throw new Error(`${this} must be a function`);
  }

  if (arg !== null && !Array.isArray(arg)) {
    throw new Error(`${arg} must be a array or undefined`);
  }
  currentContext.func = this;
  currentContext.func(...arg);
  delete currentContext.funC;
}

const obj = {
  name:"krishna"
}

function getDetails(age,place) {
  console.log(`Hello ${this.name} your age is ${age} and place is ${place}`);
}

getDetails.myApply(obj, [28, "lohaghat"]);




//bind()

Function.prototype.myBind = function (currentContext, ...args) {
  if (typeof this !== 'function') {
    throw new Error(`${this} must be a function`);
  }
 
  currentContext.func = this;
  return function (...otherArgs) {
    currentContext.func(...args, ...otherArgs);
  }
}

const person = {
  name: "Krishna",
  active:"true",
}

function printDetails(age, place,married ) {
  console.log(`Hello ${this.name} your age is  ${age} you belong from ${place} and is active?  ${this.active} are you married? ${married}`);
}

let result = printDetails.myBind(person, 28, "Bangalore");

result('no');