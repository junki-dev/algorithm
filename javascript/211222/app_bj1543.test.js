import bj1543 from './app_bj1543';

describe('[Greedy] 백준 1543 테스트', () => {
  test(`case 1`, () => {
    expect(bj1543([`ababababa`, `aba`])).toStrictEqual(2);
  });

  test(`case 2`, () => {
    expect(bj1543([`a a a a a`, `a a`])).toStrictEqual(2);
  });

  test(`case 3`, () => {
    expect(bj1543([`ababababa`, `ababa`])).toStrictEqual(1);
  });

  test(`case 4`, () => {
    expect(bj1543([`aaaaaaa`, `aa`])).toStrictEqual(3);
  });
});
