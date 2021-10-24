var search = function (nums, target) {
  if (!nums.length) return false;
  let left = 0;
  let right = nums.length - 1;
  if (nums[left] <= target) {
    while (left < nums.length && nums[left] !== target) {
      left++;
    }

    return nums[left] === target ? true : false;
  }

  if (nums[right] >= target) {
    while (right >= 0 && nums[right] !== target) {
      right--;
    }

    return nums[right] === target ? true : false;
  }

  if (nums[right] < target && nums[left] > target) {
    return false;
  }
};

const nums = [1];
const target = 0;
const result = search(nums, target);
console.log(`result >>> ${result}`);
