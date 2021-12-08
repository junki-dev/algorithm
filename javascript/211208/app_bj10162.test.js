import bj10162 from './app_bj10162';

describe('[Greedy] 백준 10162 테스트', () => {
  test(`case 1`, () => {
    expect(bj10162(['100'])).toStrictEqual(`0 1 4`);
  });

  test(`case 2`, () => {
    expect(bj10162(['189'])).toStrictEqual(-1);
  });

  test(`case 3`, () => {
    expect(bj10162(['790'])).toStrictEqual(`2 3 1`);
  });
});
