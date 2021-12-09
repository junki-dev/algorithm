import bj1789 from './app_bj1789';

describe('[Greedy] 백준 1789 테스트', () => {
  test(`case 1`, () => {
    expect(bj1789(['200'])).toStrictEqual(19);
  });

  test(`case 2`, () => {
    expect(bj1789(['19999'])).toStrictEqual(199);
  });

  test(`case 3`, () => {
    expect(bj1789(['210938'])).toStrictEqual(649);
  });
});
