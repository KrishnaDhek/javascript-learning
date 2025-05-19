Array.prototype.myReduce = function (callback, curVal) {

     if (typeof callback !== 'function') {
       throw new TypeError(callback + ' is not a function');
     }
    let acc = curVal !== undefined ? curVal : this[0];
    let index = curVal !== undefined ? 0 : 1;

    for (let i = index; i < this.length; i++){
        if (i in this) {
            acc = callback(acc, this[i], i, this);
        }
    }
    return acc;
}

const arr = [3, 4, 5, 67];
const answer = arr.myReduce((acc, cval) => {
    return acc + cval;
},0)
console.log(answer);