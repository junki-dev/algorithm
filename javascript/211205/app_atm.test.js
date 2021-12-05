import bj11399 from './app_atm';

describe('[Greedy] 백준 11399 테스트', () => {
  test(`case 1`, () => {
    expect(bj11399([`5`, `3 1 4 3 2`])).toStrictEqual(32);
  });

  test(`case 2`, () => {
    expect(bj11399([`1`, `9`])).toStrictEqual(9);
  });

  test(`case 3`, () => {
    expect(bj11399([`3`, `8 2 5`])).toStrictEqual(24);
  });
});
