import isInterleave from './app_97';

describe(`97번 문제 테스트`, () => {
  test(`case 1`, () => {
    expect(isInterleave('aabcc', 'dbbca', 'aadbbcbcac')).toStrictEqual(true);
  });

  test(`case 2`, () => {
    expect(isInterleave('aabcc', 'dbbca', 'aadbbbaccc')).toStrictEqual(false);
  });

  test(`case 3`, () => {
    expect(isInterleave('', '', '')).toStrictEqual(true);
  });
});
