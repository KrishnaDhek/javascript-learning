//Polyfill for every(): every() is a higher-order array method that takes a callback function. The callback function is invoked for each element in the array. If **all** elements pass the condition (i.e., the callback returns true for every item), then `every()` returns true. Otherwise, it returns false.

Array.prototype.myEvery = function (callback) {
    if (typeof callback !== 'function') {
        throw Error(`Callback must be a function. Received ${callback}`);
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

const arr = [3, 4, 5, 6, 7, 8];
const result = arr.myEvery((i) => {
   return i % 2 == 0;
})
console.log(result);