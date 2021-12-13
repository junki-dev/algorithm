import bj1744 from './app_bj1744';

describe('[Greedy] 백준 1744 테스트', () => {
  test(`case 1`, () => {
    expect(bj1744(['4', '-1', '2', '1', '3'])).toStrictEqual(6);
  });

  test(`case 2`, () => {
    expect(bj1744(['6', '0', '1', '2', '4', '3', '5'])).toStrictEqual(27);
  });

  test(`case 3`, () => {
    expect(bj1744(['1', '-1'])).toStrictEqual(-1);
  });

  test(`case 4`, () => {
    expect(bj1744(['3', '-1', '0', '1'])).toStrictEqual(1);
  });

  test(`case 5`, () => {
    expect(bj1744(['2', '1', '1'])).toStrictEqual(2);
  });

  test(`case 6`, () => {
    expect(bj1744(['5', '-4', '-3', '-2', '-1', '0'])).toStrictEqual(14);
  });
});
