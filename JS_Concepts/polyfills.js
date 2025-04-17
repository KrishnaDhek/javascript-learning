
//polyfill for map

Array.prototype.testMap = function (callBack) {
    if (typeof callBack !== "function") {
      //edge case
      throw new TypeError('Callback must be a function');
    }
    const result = [];
    for (let i = 0; i < this.length; i++){
        result.push(callBack(this[i], i, this));
    }
    return result;
}

const nums = [45, 2, 39, 60, 10, 19, 345];
const nums1 = [1, 2, 3, 4, 5, 19, 345];
nums1.testMap();
const newArray =nums.testMap((n) => {
    return n * 2;
})
console.log(newArray);


//polyfill for filter

Array.prototype.testfilter = function (callBack) {
    if (typeof callBack !== 'function') {
      //edge case
      throw new TypeError('Callback must be a function');
    }
  const result = [];
  for (let i = 0; i < this.length; i++) {
      if (callBack(this[i], i, this))
          result.push(this[i]);
  }
  return result;
};

const nums = [45, 2, 39, 60, 10, 19, 345];
const nums1 = [1, 2, 3, 4, 5, 19, 345];
nums1.testfilter();
const newArray = nums.testfilter((n) => {
  return n %5==0;
});
console.log(newArray);


//polyfill for reduce

Array.prototype.testreduce = function (callBack, currVal) {
    if (typeof callBack !== "function") { //edge case
        throw new TypeError("Callback must be a function");
    }
    let acc = currVal !== undefined ? currVal : this[0];
    let index = currVal !== undefined ? 0 : 1;
  for (let i = index; i < this.length; i++) {
   acc = callBack(acc, this[i], i, this);
  }
  return acc;
};

const nums = [45, 2, 39, 60, 10, 19, 345];
const nums1 = [1, 2, 3, 4, 5, 19, 345];
nums1.testreduce();
const newArray = nums.testreduce((acc, currVal) => {
  return acc+currVal;
});
console.log(newArray);


//pollyfill for forEach

Array.prototype.myForEach = function (callBack) {
    if (typeof callBack !== "function") {
        throw new Error("Callback must be a function");
    }
    for (let i = 0; i < this.length; i++){
        if (i in this) {
            callBack(this[i], i, this);
        }
    }
}

const items = [20, 3, 4, 55, 108];
items.myForEach((i) => {
    console.log(i);
})


//polyfill for find()

Array.prototype.myFind = function (callBack) {
    if (typeof callBack !== "function") {
        throw new Error("Callback must be a function")
    }
    for (let i = 0; i < this.length; i++){
        if ( i in this && callBack(this[i], i, this)) {
           return this[i];
       }
    }
    return undefined
}

const items = [35, 2, 250, 190];
let ans =items.myFind((i) => {
    return i > 35;
})
console.log(ans);



//polyfill for some()

Array.prototype.mySome = function (callBack) {
    if (typeof callBack !== "function") {
        throw new Error("Callback must be function");
    }

    for (let i = 0; i < this.length; i++){
        if (i in this && callBack(this[i], i, this)) {
            return true;
        }
    }
    return false;
}

const nums = [3, 4, 68, 32, 11, 51];
const ans = nums.mySome((n) => {
    return n % 4==0;
})

console.log(ans);


//polyfill for every()

Array.prototype.myEvery = function (callBack) {
    if (typeof callBack !== "function") {
        throw new Error("Callback must be a function");
    }

    for (let i = 0; i < this.length; i++){
        if (i in this && !callBack(this[i], i, this)) {
            return false;
        }
    }

    return true;
}

const nums = [24, 2, 6, 18, 40, 60];
const ans = nums.myEvery((i) => {
    return i % 3 === 0;
})
console.log(ans);



//polyfill for call()

Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== "function") {
        throw new Error(`${this} must be a function`);
    }
    const tempFn = Symbol();
    context[tempFn] = this;
    context[tempFn](...args);
    delete context[tempFn];
}

const obj1 = {
    fName: "Krishna",
    lName: "Dhek"
}

const obj2 = {
  fName: 'Kr',
  lName: 'D',
}

function testMessage(place) {
    console.log(`Hello ${this.fName} ${this.lName} from ${place} `);
}

testMessage.myCall(obj1, 'Bangalore');
testMessage.myCall(obj2, 'Lgt');


