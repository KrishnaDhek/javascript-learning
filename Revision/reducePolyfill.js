//Polyfill for reduce(): reduce is an high-order array method, that takes an callback function and returns new array with a single value, it takes two arguments a accumulator and a current item

Array.prototype.myReduce = function (callback, currentVal) {
    if (typeof callback !== 'function') {
        throw new Error(`Callback must be a function, Received ${callback}`)
    }
  let acc = currentVal !== undefined ? currentVal : this[0];
  let index = currentVal !== undefined ? 0 : 1;
  for (let i = index; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

const arr = [3, 4, 5, 6, 7, 8];
const result = arr.myReduce((acc, cVal) => {
    return acc + cVal;
})
console.log(result);