import solution from './expression_N';

describe('N으로 표현 테스트', () => {
  test(`case 1`, () => {
    expect(solution(5, 12)).toStrictEqual(4);
  });

  test(`case 2`, () => {
    expect(solution(2, 11)).toStrictEqual(3);
  });
});
