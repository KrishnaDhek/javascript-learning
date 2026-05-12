let twoSum = function (nums, target) {
    let result = [];
    
    let mapData = new Map();

    for (let i = 0; i < nums.length; i++){
        if (mapData.has(nums[i])) {
            result[0] = i;
            result[1] = mapData.get(nums[i]);
            return result;
        } else {
            mapData.set(target - nums[i], i);
        }
    }
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log("Two Sum : " + twoSum(nums, target));