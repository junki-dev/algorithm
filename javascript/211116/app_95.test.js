import generateTrees from './app_95';

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

describe(`95번 문제 테스트`, () => {
  test(`case 1`, () => {
    expect(generateTrees(3)).toEqual([
      new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))),
      new TreeNode(1, null, new TreeNode(3, new TreeNode(2), null)),
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), null),
      new TreeNode(3, new TreeNode(2, new TreeNode(1), null), null),
    ]);
  });

  test(`case 2`, () => {
    expect(generateTrees(1)).toEqual([new TreeNode(1)]);
  });
});
