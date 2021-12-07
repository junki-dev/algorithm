import bj1541 from './app_bj1541';

describe('[Greedy] 백준 1541 테스트', () => {
  test(`case 1`, () => {
    expect(bj1541(['55-50+40'])).toStrictEqual(-35);
  });

  test(`case 2`, () => {
    expect(bj1541(['10+20+30+40'])).toStrictEqual(100);
  });

  test(`case 3`, () => {
    expect(bj1541(['00009-00009'])).toStrictEqual(0);
  });
});
