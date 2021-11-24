import solution from './app_n';

describe(`n % x === 1 이 되는 x 최솟값`, () => {
  test(`case 1`, () => {
    expect(solution(10)).toStrictEqual(3);
  });

  test(`case 2`, () => {
    expect(solution(12)).toStrictEqual(11);
  });
});
