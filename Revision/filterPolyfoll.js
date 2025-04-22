//Polyfill for filter() : filter() is an high-order array method that takes an callback function returns a new filtered array, the callback function is invoked for each element and the element that pass the filter condition are added to the new array

Array.prototype.myFilter = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error(`Callback must be a function. Received: ${callback}`);
    }

    let filterArr = [];
    for (let i = 0; i < this.length; i++){
        if(this.hasOwnProperty(i)){ //handle contions like sparse array
        if (callback(this[i], i, this)) {
            filterArr.push(this[i])
        }}
    }
    return filterArr;
}

const arr = [24, 55, 66, , 121, , 31, 34, 89, 90];
const result = arr.myFilter((item, index, self) => {
    return item % 2 !== 0;
});
console.log(result);