function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const generate = (start, end) => {
  if (start > end) {
    return [null];
  }

  const result = [];
  for (let i = start; i <= end; i++) {
    const left = generate(start, i - 1);
    const right = generate(i + 1, end);
    for (const l of left) {
      for (const r of right) {
        const tmp = new TreeNode(i, l, r);
        result.push(tmp);
      }
    }
  }

  return result;
};

var generateTrees = function (n) {
  return generate(1, n);
};

export default generateTrees;
