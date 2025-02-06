let twoSum = function (nums, target) {
    let result = [];
    let mapItem = new Map();

    for (let i = 0; i < nums.length; i++){
        if (mapItem.has(nums[i])) {
            result[0] = i;
            result[1] = mapItem.get(nums[i]);
            return result;
        }
        else {
            mapItem.set(target - nums[i], i);
        }
    }
    return null;
}

const nums = [2, 5, 10, 12];
let target = 17;
console.log("Two Sum: "+twoSum(nums, target));