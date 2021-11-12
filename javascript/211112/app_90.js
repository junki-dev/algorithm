const allCase = (nums, res, tmp, cur) => {
  res.push(tmp.slice());
  for (let i = cur; i < nums.length; i++) {
    if (i > cur && nums[i] === nums[i - 1]) {
      continue;
    }

    tmp.push(nums[i]);
    allCase(nums, res, tmp, i + 1);
    tmp.pop();
  }

  return res;
};

var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  const tmp = [];

  return allCase(nums, res, tmp, 0);
};

const nums = [1, 2, 2];
const result = subsetsWithDup(nums);
console.log(`result >>> `);
console.log(result);
