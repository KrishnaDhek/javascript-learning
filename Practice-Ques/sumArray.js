const nums = [4, 5, 6, 7, 8];

const result = nums.reduce(function (acc, num) {
    if (num > acc) {
        acc = num;
    }
    return acc;
},0);
console.log(result);