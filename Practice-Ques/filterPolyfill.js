Array.prototype.myFilter = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error(`'${callback} is not a function`);
    }
    const result = [];
    for (let i = 0; i < this.length; i++){
        if (i in this) {
            if (callback(this[i], i, this)) {
              result.push(this[i]);
            }
        }
    }
    return result;
}

const arr = [45, 65, 78, 60, 25];
const result = arr.myFilter((item) => {
    return item % 3 == 0;
})
console.log(result);