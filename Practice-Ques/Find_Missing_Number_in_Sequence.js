const arr = [1, 3, 0];
console.log(findMissing(arr));
function findMissing(arr) {
    let ans1 = 0;
    let ans2 = 0;

    for (let i = 0; i <= arr.length; i++){
        ans1 ^= i;
    }

    for (let i of arr) {
        ans2 ^= i;
    }

    return ans1 ^ ans2;
}