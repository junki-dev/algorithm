import bj2720 from './app_bj2720';

describe('[Greedy] 백준 2720 테스트', () => {
  test(`case 1`, () => {
    expect(bj2720(['3', '124', '25', '194'])).toStrictEqual(['4 2 0 4', '1 0 0 0', '7 1 1 4']);
  });
});
