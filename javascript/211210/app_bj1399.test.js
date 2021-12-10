import bj1399 from './app_bj1399';

describe('[Greedy] 백준 1399 테스트', () => {
  test(`case 1`, () => {
    expect(bj1399(['2', 'AAA', 'AAA'])).toStrictEqual(1998);
  });

  test(`case 2`, () => {
    expect(bj1399(['2', 'GCF', 'ACDEB'])).toStrictEqual(99437);
  });

  test(`case 3`, () => {
    expect(bj1399(['10', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'])).toStrictEqual(45);
  });

  test(`case 3`, () => {
    expect(bj1399(['2', 'AB', 'BA'])).toStrictEqual(187);
  });
});
