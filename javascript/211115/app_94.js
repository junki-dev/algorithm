var inorderTraversal = function (root) {
  const result = [];
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }

  return result;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(null);
const result = inorderTraversal(root);
console.log(result);
// let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
// const result = inorderTraversal(root);
// console.log(result);

export default inorderTraversal;
