import bj1499 from './app_bj1499';

describe('[Greedy] 백준 1499 테스트', () => {
  test(`case 1`, () => {
    expect(bj1499([`4 2`, `1 2 100 101`])).toStrictEqual(2);
  });

  test(`case 2`, () => {
    expect(bj1499([`4 3`, `1 2 3 4`])).toStrictEqual(2);
  });

  test(`case 3`, () => {
    expect(bj1499([`3 1`, `3 2 1`])).toStrictEqual(3);
  });
});
