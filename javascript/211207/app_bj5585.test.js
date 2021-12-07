import bj5585 from './app_bj5585';

describe('[Greedy] 백준 1541 테스트', () => {
  test(`case 1`, () => {
    expect(bj5585(['380'])).toStrictEqual(4);
  });

  test(`case 2`, () => {
    expect(bj5585(['1'])).toStrictEqual(15);
  });

  test(`case 3`, () => {
    expect(bj5585(['270'])).toStrictEqual(6);
  });
});
