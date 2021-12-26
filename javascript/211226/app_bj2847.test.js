import bj2847 from './app_bj2847';

describe('[Greedy] 백준 2847 테스트', () => {
  test(`case 1`, () => {
    expect(bj2847([3, 5, 5, 5])).toStrictEqual(3);
  });

  test(`case 2`, () => {
    expect(bj2847([4, 5, 3, 7, 5])).toStrictEqual(6);
  });
});
