let removeElement = function (nums, val) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
        nums[i] = nums[j];
        i++;
    }
  }
  return i;
};

const nums = [3, 2, 2, 3,4,5,5];
const val = 3;

console.log('Remove Element:' + removeElement(nums, val));