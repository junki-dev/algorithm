import bj1026 from './app_bj1026';

describe('[Greedy] 백준 1026 테스트', () => {
  test(`case 1`, () => {
    expect(bj1026(['5', '1 1 1 6 0', '2 7 8 3 1'])).toStrictEqual(18);
  });

  test(`case 2`, () => {
    expect(bj1026(['3', '1 1 3', '10 30 20'])).toStrictEqual(80);
  });

  test(`case 3`, () => {
    expect(bj1026(['9', '5 15 100 31 39 0 0 3 26', '11 12 13 2 3 4 5 9 1'])).toStrictEqual(528);
  });
});
