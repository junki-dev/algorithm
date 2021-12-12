import bj1715 from './app_bj1715';

describe('[Greedy] 백준 1715 테스트', () => {
  test(`case 1`, () => {
    expect(bj1715([10, 10, 10, 10])).toStrictEqual(80);
  });

  test(`case 2`, () => {
    expect(bj1715([10, 20, 40])).toStrictEqual(100);
  });

  test(`case 3`, () => {
    expect(bj1715([20, 20, 20, 10, 10])).toStrictEqual(180);
  });
});
