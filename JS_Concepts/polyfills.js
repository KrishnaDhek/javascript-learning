
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