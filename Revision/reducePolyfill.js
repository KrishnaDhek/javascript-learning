// Polyfill for reduce(): reduce is a higher-order array method that takes a callback and returns a single value.

Array.prototype.myReduce = function (callback, currentVal) {
  if (typeof callback !== 'function') {
    throw new Error(`Callback must be a function, Received ${callback}`);
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
},0);
console.log(result);


const expenses = [1200, 750, 340, 2100, 650];
const totalExpenses = expenses.myReduce((acc, cVal) => {
    return acc + cVal
}, 0);
console.log(`the total expendeture is : ${totalExpenses}`);