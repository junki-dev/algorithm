var quickSort = function (nums) {
  if (nums.length === 0) {
    return [];
  }

  const flag = nums[0];
  const leftArray = new Array();
  const rightArray = new Array();

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < flag) {
      leftArray.push(nums[i]);
    } else {
      rightArray.push(nums[i]);
    }
  }

  return quickSort(leftArray).concat(flag, quickSort(rightArray));
};

var sortColors = function (nums) {
  return quickSort(nums);
};
