var removeDuplicates = function (nums) {
  if (nums.length < 2) {
    return nums;
  }

  let left = 0;
  let dupNum = nums[left];
  let dupCount = 1;
  let count = 1;

  left++;
  while (left < nums.length) {
    if (dupNum === nums[left]) {
      if (dupCount >= 2) {
        nums.splice(left, 1);
        continue;
      } else {
        dupCount++;
      }
    } else {
      dupNum = nums[left];
      dupCount = 1;
    }

    count++;
    left++;
  }

  console.log(`nums >>> `);
  console.log(nums);
  return count;
};

const nums = [1, 1, 1, 2, 2, 3];
const result = removeDuplicates(nums);
console.log(`result >>> ${result}`);
