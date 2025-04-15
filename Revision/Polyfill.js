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

