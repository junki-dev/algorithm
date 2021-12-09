import bj1946 from './app_bj1946';

describe('[Greedy] 백준 1946 테스트', () => {
  test(`case 1`, () => {
    expect(
      bj1946(5, [
        [3, 2],
        [1, 4],
        [4, 1],
        [2, 3],
        [5, 5],
      ]),
    ).toStrictEqual(4);
  });

  test(`case 2`, () => {
    expect(
      bj1946(7, [
        [3, 6],
        [7, 3],
        [4, 2],
        [1, 4],
        [5, 7],
        [2, 5],
        [6, 1],
      ]),
    ).toStrictEqual(3);
  });
});
