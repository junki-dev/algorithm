var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i; j < nums.length; j++) {
      if (i === j) {
        continue;
      }

      if (nums[min] >= nums[j]) {
        min = j;
      }
    }

    const tmp = nums[i];
    nums[i] = nums[min];
    nums[min] = tmp;
  }
};

const nums = [2, 0, 2, 1, 1, 0];

const result = sortColors(nums);
console.log(`result >>> ${result}`);
