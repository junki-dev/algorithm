import bj2864 from './app_bj2864';

describe('[Greedy] 백준 2864 테스트', () => {
  test(`case 1`, () => {
    expect(bj2864(['11 25'])).toStrictEqual(`36 37`);
  });

  test(`case 2`, () => {
    expect(bj2864(['1430 4862'])).toStrictEqual(`6282 6292`);
  });

  test(`case 3`, () => {
    expect(bj2864(['16796 58786'])).toStrictEqual(`74580 85582`);
  });
});
