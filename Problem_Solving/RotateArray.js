class Solution {
  rotate(nums, k) {
    k = k % nums.length;

    this.reverseArray(0, nums.length - 1, nums);

    this.reverseArray(0, k - 1, nums);

    this.reverseArray(k, nums.length - 1, nums);
  }

  reverseArray(i, j, nums) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;

      i++;
      j--;
    }
  }
}

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

let obj = new Solution();

obj.rotate(nums, k);

console.log(nums);
