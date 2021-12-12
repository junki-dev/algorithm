import bj4796 from './app_bj4796';

describe('[Greedy] 백준 4796 테스트', () => {
  test(`case 1`, () => {
    expect(bj4796(['5 8 20', '0 0 0'])).toStrictEqual(14);
  });

  test(`case 2`, () => {
    expect(bj4796(['5 8 17', '0 0 0'])).toStrictEqual(11);
  });

  test(`case 3`, () => {
    expect(bj4796(['5 8 22', '0 0 0'])).toStrictEqual(15);
  });
});
