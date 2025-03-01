const arr = [2, 3, 4, 5, 6];


const doubleNumbers = function (num) {
    return num * 2;
}

const evaluate = function (logic, arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(logic(arr[i]));
    }
    return result;
}

console.log(evaluate(doubleNumbers,arr));