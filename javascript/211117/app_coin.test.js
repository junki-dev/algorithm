import coinsCount from './app_coin';

describe(`Greedy 연습 동전교환`, () => {
  test(`case 1`, () => {
    expect(coinsCount(6250)).toStrictEqual(9);
  });

  test(`case 2`, () => {
    expect(coinsCount(2750)).toStrictEqual(6);
  });
});
