//Polyfill for some() : some() is an array method that takes and callback function is invoked on every element it returns true if at least one element satisfies the condition, otherwise false.


Array.prototype.mySome = function (callback) {
    if (typeof callback !== 'function') {
        throw Error(`Callback must be a function. Received ${callback}`)
    }

    for (let i = 0; i < this.length; i++){
        if (this.hasOwnProperty(i)) {
            if (callback(this[i], i, this)) {
                return true;
            }
        }
    }
    return false;


}


const arr = [6, 7, 8, 9];
const result = arr.mySome((i) => {
    return i % 5 == 0;
})
console.log(result);
