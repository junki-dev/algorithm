import bj1700 from './app_bj1700';

describe('[Greedy] 백준 1700 테스트', () => {
  test(`case 1`, () => {
    expect(bj1700([`2 7`, `2 3 2 3 1 2 7`])).toStrictEqual(2);
  });

  test(`case 2`, () => {
    expect(bj1700([`2 13`, `2 3 1 3 1 3 1 3 2 2 2 2 2`])).toStrictEqual(2);
  });

  test(`case 3`, () => {
    expect(bj1700([`2 15`, `3 2 1 2 1 2 1 2 1 3 3 3 3 3 3`])).toStrictEqual(2);
  });
});
