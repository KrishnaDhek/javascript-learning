const nums = [0, 0, 1, 1, 1, 2, 2, 3, 4, 4, 5, 6, 6];
function removeDup(nums) {
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        if (nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j];
        }
        j++;
    }
    return i + 1;
}

console.log(removeDup(nums));