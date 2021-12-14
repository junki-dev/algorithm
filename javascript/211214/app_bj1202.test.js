import bj16953 from './app_bj16953';

describe('[Greedy] 백준 16952 테스트', () => {
  test(`case 1`, () => {
    expect(bj16953(['2 162'])).toStrictEqual(5);
  });

  test(`case 2`, () => {
    expect(bj16953(['4 42'])).toStrictEqual(-1);
  });

  test(`case 3`, () => {
    expect(bj16953(['100 40021'])).toStrictEqual(5);
  });
});
