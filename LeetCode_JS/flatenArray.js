const arr = [3, 4,[5, 6, 7], 15, 9];

function flattenArray(arr) {
    let result = [];
    for (let i of arr) {
        if (Array.isArray(i)) {
        result = result.concat(flattenArray(i));
    }
    else {
        result.push(i);
    }
    }
    return result;
}

console.log(flattenArray(arr));