/*   Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

const twoSum = function (nums, target) {
   for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
         if (nums[i] + nums[j] === target) {
            return [i, j];
         }
      }
   }
   return [];
};
const twoSumHashmap = function (nums, target) {
   const map = new Map();
   for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
         return [map.get(complement), i];
      }
      map.set(nums[i], i);
   }
   return [];
};

const nums = [6, 4, 6, 16, 8, 9, 10];

const sum = twoSum(nums, 20);

// using hashmap
