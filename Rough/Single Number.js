/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 */

function singleNumber(num) {
    let ans = 0;
    for (let i of num) {
        ans =ans^i;
    }
    return ans;
}

const num = [1, 2, 2,1,9];
console.log(singleNumber(num));