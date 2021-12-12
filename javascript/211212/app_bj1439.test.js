import bj1439 from './app_bj1439';

describe('[Greedy] 백준 1439 테스트', () => {
  test(`case 1`, () => {
    expect(bj1439(['0001100'])).toStrictEqual(1);
  });

  test(`case 2`, () => {
    expect(bj1439(['11111'])).toStrictEqual(0);
  });

  test(`case 3`, () => {
    expect(bj1439(['00000001'])).toStrictEqual(1);
  });

  test(`case 4`, () => {
    expect(bj1439(['11001100110011000001'])).toStrictEqual(4);
  });

  test(`case 5`, () => {
    expect(bj1439(['11101101'])).toStrictEqual(2);
  });
});
