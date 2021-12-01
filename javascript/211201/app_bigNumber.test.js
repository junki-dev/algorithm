import bigNumber from './app_bigNumber';

describe('joystic 테스트', () => {
  test(`case 1`, () => {
    expect(bigNumber('1924', 2)).toStrictEqual('94');
  });

  test(`case 2`, () => {
    expect(bigNumber('1231234', 3)).toStrictEqual('3234');
  });

  test(`case 3`, () => {
    expect(bigNumber('4177252841', 4)).toStrictEqual('775841');
  });

  test(`case 4`, () => {
    expect(bigNumber('999', 2)).toStrictEqual('9');
  });
});
