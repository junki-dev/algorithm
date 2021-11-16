import numTrees from './app_96';

describe(`96번 문제 테스트`, () => {
  test(`case 1`, () => {
    expect(numTrees(1)).toEqual(1);
  });

  test(`case 2`, () => {
    expect(numTrees(3)).toEqual(5);
  });

  test(`case 3`, () => {
    expect(numTrees(4)).toEqual(14);
  });
});
