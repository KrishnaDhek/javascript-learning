Array.prototype.myMap = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error(`${callback} is not a function`);
    }

    const result = [];
    for (let i = 0; i < this.length; i++){
        if (i in this) {
            result[i]=callback(this[i], i, this);
        }
    }
    return result;

}

const arr = [56, 7, , 8, , 98];
const answer = arr.myMap((item, index, self) => {
    return item * 100;
});
console.log(answer);