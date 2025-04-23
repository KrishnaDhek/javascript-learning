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