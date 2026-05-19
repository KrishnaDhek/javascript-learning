const num = [1, 3, 5, 8, 9];
let target = 6;

let index = function (num, target) {
    let low = 0;
    let high = num.length;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (num[mid] === target) {
            return mid;
        }
        else if (num[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    return low;
}

console.log("Target element index is: "+index(num,target));