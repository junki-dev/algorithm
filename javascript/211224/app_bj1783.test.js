import bj1783 from './app_bj1783';

describe('[Greedy] 백준 1783 테스트', () => {
  test(`case 1`, () => {
    expect(bj1783(['100 50'])).toStrictEqual(48);
  });

  test(`case 2`, () => {
    expect(bj1783(['1 1'])).toStrictEqual(1);
  });

  test(`case 3`, () => {
    expect(bj1783(['17 5'])).toStrictEqual(4);
  });

  test(`case 4`, () => {
    expect(bj1783(['2 4'])).toStrictEqual(2);
  });

  test(`case 5`, () => {
    expect(bj1783(['20 4'])).toStrictEqual(4);
  });
});
