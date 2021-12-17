import bj1080 from './app_bj1080';

describe('[Greedy] 백준 1080 테스트', () => {
  test(`case 1`, () => {
    expect(bj1080(['3 4', '0000', '0010', '0000', '1001', '1011', '1001'])).toStrictEqual(2);
  });

  test(`case 2`, () => {
    expect(bj1080(['3 3', '111', '111', '111', '000', '000', '000'])).toStrictEqual(1);
  });

  test(`case 3`, () => {
    expect(bj1080(['1 1', '1', '0'])).toStrictEqual(-1);
  });

  test(`case 4`, () => {
    expect(
      bj1080([
        '18 3',
        '001',
        '100',
        '100',
        '000',
        '011',
        '010',
        '100',
        '100',
        '010',
        '010',
        '010',
        '110',
        '101',
        '101',
        '000',
        '110',
        '000',
        '110',
        '001',
        '100',
        '011',
        '000',
        '100',
        '010',
        '011',
        '100',
        '101',
        '101',
        '010',
        '001',
        '010',
        '010',
        '111',
        '110',
        '111',
        '001',
      ]),
    ).toStrictEqual(7);
  });
});
