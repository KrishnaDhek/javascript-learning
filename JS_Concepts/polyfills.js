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


//filter

Array.prototype.myfilter = function (callBack) {
    const newArr = [];
    for (let i = 0; i < this.length; i++){
        if (callBack(this[i], i, this)) {
            newArr.push(this[i])
        }
    }
    return newArr;
}

const arr = [33, 12, 44, 55, 645454, 11];
const result = arr.myfilter((a, i, arr) => {
    return a % 11 == 0;
})
console.log(result);