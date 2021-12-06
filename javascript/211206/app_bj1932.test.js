import bj1932 from './app_bj1932';

describe('[Greedy] 백준 1932 테스트', () => {
  test(`case 1`, () => {
    expect(
      bj1932(['11', '1 4', '3 5', '0 6', '5 7', '3 8', '5 9', '6 10', '8 11', '8 12', '2 13', '12 14']),
    ).toStrictEqual(4);
  });

  test(`case 2`, () => {
    expect(bj1932(['3', '0 7', '1 2', '2 3'])).toStrictEqual(2);
  });

  test(`case 3`, () => {
    expect(bj1932(['10', '0 1', '2 5', '2 10', '3 11', '4 6', '5 7', '6 8', '9 10', '10 11', '12 20'])).toStrictEqual(
      6,
    );
  });
});
