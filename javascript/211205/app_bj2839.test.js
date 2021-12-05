import bj2839 from './app_bj2839';

describe('[Greedy] 백준 2839 테스트', () => {
  test(`case 1`, () => {
    expect(bj2839(18)).toStrictEqual(4);
  });

  test(`case 2`, () => {
    expect(bj2839(4)).toStrictEqual(-1);
  });

  test(`case 3`, () => {
    expect(bj2839(6)).toStrictEqual(2);
  });

  test(`case 4`, () => {
    expect(bj2839(9)).toStrictEqual(3);
  });

  test(`case 5`, () => {
    expect(bj2839(11)).toStrictEqual(3);
  });
});
