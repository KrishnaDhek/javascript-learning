
//polyfill for map

Array.prototype.testMap = function (callBack) {
    const result = [];
    for (let i = 0; i < this.length; i++){
        result.push(callBack(this[i], i, this));
    }
    return result;
}

const nums = [45, 2, 39, 60, 10, 19, 345];
const newArray =nums.testMap((n, i, nums) => {
    return n * 2;
})
console.log(newArray);


//polyfill for filter

Array.prototype.testfilter = function (callBack) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
      if (callBack(this[i], i, this))
          result.push(this[i]);
  }
  return result;
};

const nums = [45, 2, 39, 60, 10, 19, 345];
const newArray = nums.testfilter((n, i, nums) => {
  return n %5==0;
});
console.log(newArray);


//polyfill for reduce

Array.prototype.testreduce = function (callBack, currVal) {
    let acc = currVal !== undefined ? currVal : this[0];
    let index = currVal !== undefined ? 0 : 1;
  for (let i = index; i < this.length; i++) {
   acc = callBack(acc, this[i], i, this);
  }
  return acc;
};

const nums = [45, 2, 39, 60, 10, 19, 345];
const newArray = nums.testreduce((acc, currVal) => {
  return acc+currVal;
});
console.log(newArray);