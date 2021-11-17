import gymSuit from './app_gymsuit';

describe(`Greedy 연습 체육복`, () => {
  test(`case 1`, () => {
    expect(gymSuit(5, [2, 4], [1, 3, 5])).toStrictEqual(5);
  });

  test(`case 2`, () => {
    expect(gymSuit(5, [2, 4], [3])).toStrictEqual(4);
  });

  test(`case 3`, () => {
    expect(gymSuit(3, [3], [1])).toStrictEqual(2);
  });

  test(`case 4`, () => {
    expect(gymSuit(9, [5, 6, 8, 1, 2], [2, 3, 1, 4, 8, 9])).toStrictEqual(8);
  });
});
