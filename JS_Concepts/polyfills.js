//Map

Array.prototype.testingMap = function (callBack) {
    const newArray = [];
    for (let i = 0; i < this.length; i++){
        newArray.push(callBack(this[i], i, this));
    }
    return newArray;
}

const arr = [8, 3, 5, 6, 10];
const result = arr.testingMap((a, i, arr) => {
    return a * 5;
})
console.log(result);