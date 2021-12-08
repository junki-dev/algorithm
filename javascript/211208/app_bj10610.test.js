import bj10610 from './app_bj10610';

describe('[Greedy] 백준 10610 테스트', () => {
  test(`case 1`, () => {
    expect(bj10610(['30'])).toStrictEqual(30);
  });

  test(`case 2`, () => {
    expect(bj10610(['102'])).toStrictEqual(210);
  });

  test(`case 3`, () => {
    expect(bj10610(['2931'])).toStrictEqual(-1);
  });

  test(`case 4`, () => {
    expect(bj10610(['80875542'])).toStrictEqual(88755420);
  });
});
