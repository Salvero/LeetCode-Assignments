// #1 - TWO SUM

Link:
https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


My Solution:
const twoSum = function(nums, target) {
	for(let i = 0; i < nums.length; i++) {
		for(let j = i+1; j < nums.length; j++) {
			if(nums[i] + nums[j] == target) {
				return [i, j]
			}
		}
	}
};



// Brian Recommendation

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
  const map = nums.reduce((acc, cur, i) => {
      acc[Number(cur)] = i
      return acc
  }, {})

// console log this map to see what my intention is here (i want the index and the number in an object for easy look up)
// then i simply loop thru, see if I have the target I need to find in my map and return the index
// add some logs in this code to understand what my approach is - also there are many approaches to this problem so don't get hung up on the most optimal at this point
      
  for(let i=0; i<nums.length; i++){
      const remains = target - nums[i]
      
      if(map[remains] && i !== map[remains]){
          return [map[remains], i]
      }
  }
  
};