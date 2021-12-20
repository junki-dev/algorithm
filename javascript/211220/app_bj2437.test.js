import bj2437 from './app_bj2437';

describe('[Greedy] 백준 2437 테스트', () => {
  test(`case 1`, () => {
    expect(bj2437([`7`, `3 1 6 2 7 30 1`])).toStrictEqual(21);
  });

  test(`case 2`, () => {
    expect(bj2437([`6`, `1 1 3 7 8`])).toStrictEqual(6);
  });

  test(`case 3`, () => {
    expect(bj2437([`3`, `8 2 5`])).toStrictEqual(1);
  });
});
