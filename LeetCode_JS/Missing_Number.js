// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

const missingNum = (nums) => {

    let ans = 0;
    for (let i = 0; i <=nums.length; i++){
        ans ^=i;
    }
    
   nums.forEach(num => {
       ans ^= num;
   });
    
    return ans;
};

console.log(missingNum([0,2, 3, 4,5, 6, 7]));;