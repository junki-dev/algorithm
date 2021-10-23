var subsets = function (nums) {
  const result = [];

  const helper = (nums, subSet, idx) => {
    result.push([...subSet]);

    for (let i = idx; i < nums.length; i++) {
      subSet.push(nums[i]);
      helper(nums, subSet, i + 1);
      subSet.pop();
    }
  };

  helper(nums, new Array(), 0);
  console.log(result);
  return result;
};

const num = [1, 2, 3];

const result = subsets(num);
console.log(`result >>> ${result}`);
