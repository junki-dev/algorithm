import bj13305 from './app_bj13305';

describe('[Greedy] 백준 13305 테스트', () => {
  test(`case 1`, () => {
    expect(bj13305(['4', '2 3 1', '5 2 4 1'])).toStrictEqual('18');
  });

  test(`case 2`, () => {
    expect(bj13305(['4', '3 3 4', '1 1 1 1'])).toStrictEqual('10');
  });

  test(`case 3`, () => {
    expect(bj13305(['5', '3 2 5 4', '2 7 3 1 6'])).toStrictEqual('24');
  });
});
