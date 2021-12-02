import boat from './app_boat';

describe(`구명 조끼 테스트`, () => {
  test(`case 1`, () => {
    expect(boat([70, 50, 80, 50], 100)).toStrictEqual(3);
  });

  test(`case 2`, () => {
    expect(boat([70, 80, 50], 100)).toStrictEqual(3);
  });

  test(`case 3`, () => {
    expect(boat([40, 50, 150, 160], 200)).toStrictEqual(2);
  });

  test(`case 4`, () => {
    expect(boat([100, 500, 500, 900, 950], 1000)).toStrictEqual(3);
  });
});
