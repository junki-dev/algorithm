import inorderTraversal from './app_94';

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

describe(`94번 문제 테스트`, () => {
  test(`테스트1`, () => {
    expect(inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null)))).toStrictEqual([1, 3, 2]);
  });

  test(`테스트2`, () => {
    expect(inorderTraversal(new TreeNode(null))).toStrictEqual([null]);
  });

  test(`테스트3`, () => {
    expect(inorderTraversal(new TreeNode(1))).toStrictEqual([1]);
  });

  test(`테스트4`, () => {
    expect(inorderTraversal(new TreeNode(1, new TreeNode(2), null))).toStrictEqual([2, 1]);
  });

  test(`테스트5`, () => {
    expect(inorderTraversal(new TreeNode(1, null, new TreeNode(2)))).toStrictEqual([1, 2]);
  });
});
