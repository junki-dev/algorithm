import joystick from './app_joystick';

describe(`joystic 테스트`, () => {
  test(`case 1`, () => {
    expect(joystick(`JEROEN`)).toStrictEqual(56);
  });

  test(`case 2`, () => {
    expect(joystick(`JAN`)).toStrictEqual(23);
  });

  test(`case 3`, () => {
    expect(joystick(`ZAAAZZZZZZZ`)).toStrictEqual(15);
  });
});
