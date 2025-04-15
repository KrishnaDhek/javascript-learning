//polyfill for map()

Array.prototype.myMap = function (cb) {
    const arr = [];
    for (let i = 0; i < this.length; i++){
        const result = cb(this[i], i, this);
        arr.push(result);
    }
    return arr;
}

const nums = [34, 2, 55, 75, 87, 91, 32];
const ans = nums.myMap((i) => {
  return  i * 5;

})
console.log(ans);

//polyfill for reduce()

Array.prototype.myReduce = function (cb,cVal) {
    let acc = cVal !== undefined ? cVal : this[0];
    let index = cVal !== undefined ? 0 : 1;
    for (let i = index; i < this.length; i++){
        acc = cb(acc, this[i], i, this);
    }
    return acc;
}

const nums = [34, 2, 55, 75, 87, 91, 32];
const ans = nums.myReduce((acc,val) => {
    return acc +val ;

})
console.log(ans);

//polyfill for filter()

Array.prototype.myFilter = function (cb) {
    const arr = []; 
    for (let i = 0; i < this.length; i++){
        if (cb(this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}
const nums = [34, 2, 55, 75, 87, 91, 32];
const ans = nums.myFilter((n) => {
  return n>50;
});
console.log(ans);
