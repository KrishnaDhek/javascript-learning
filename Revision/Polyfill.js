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
  return `the item is ${i*2} present at index ${index} for the array ${self}`
})
console.log(result);