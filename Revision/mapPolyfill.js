//Polyfill for map(): map() is a higher-order array method that takes a callback function and returns a new array. The callback is invoked for each element in the array, and its return value is added to a new array.

Array.prototype.myMap = function (callback) { // this will make the custom map() public 
    if (typeof callback !== 'function') {// check if the callback function provided is an valid function
        throw new Error(`Callback must be a function. Received: ${callback}`);
    }
    let result = [];//create an empty array to store the result
    for (let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this)); // call the callback fucntion for these argument the current item, its index and the array itslef and push the result of this to the result array
    }
    return result; // return the result
}

const arr = [4, 5, 6, 7, 8, 9];
const newArr = arr.myMap((item, index, self) => {
    return {value:item * 2,index:index,originalArray: self}; //compute item
})
console.log(newArr);