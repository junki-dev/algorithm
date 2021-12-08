import bj2217 from './app_bj2217';

describe('[Greedy] 백준 2217 테스트', () => {
  test(`case 1`, () => {
    expect(bj2217(['2', '10', '20'])).toStrictEqual(20);
  });

  test(`case 2`, () => {
    expect(bj2217(['3', '3', '10', '20'])).toStrictEqual(20);
  });

  test(`case 3`, () => {
    expect(bj2217(['5', '12', '20', '18', '16', '26'])).toStrictEqual(64);
  });
});
