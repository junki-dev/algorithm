function bj2720(input) {
  let T = Number(input.shift());
  let C = input.map((str) => Number(str / 100));
  let coins = [];
  for (let i = 0; i < T; i++) {
    const quarter = parseInt(C[i] / 0.25);
    C[i] = (C[i] - quarter * 0.25).toFixed(2);
    coins[i] = quarter + ' ';

    const dime = parseInt(C[i] / 0.1);
    C[i] = (C[i] - dime * 0.1).toFixed(2);
    coins[i] += dime + ' ';

    const nickel = parseInt(C[i] / 0.05);
    C[i] = (C[i] - nickel * 0.05).toFixed(2);
    coins[i] += nickel + ' ';

    const peny = parseInt(C[i] / 0.01);
    C[i] = (C[i] - peny * 0.01).toFixed(2);
    coins[i] += peny + '';
  }

  return coins;
}

export default bj2720;

/** 제출 */
// const input = [];

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let T = Number(input.shift());
//     let C = input.map((str) => Number(str / 100));

//     for (let i = 0; i < T; i++) {
//       let coins = '';

//       const quarter = parseInt(C[i] / 0.25);
//       C[i] = (C[i] - quarter * 0.25).toFixed(2);
//       coins = quarter + ' ';

//       const dime = parseInt(C[i] / 0.1);
//       C[i] = (C[i] - dime * 0.1).toFixed(2);
//       coins += dime + ' ';

//       const nickel = parseInt(C[i] / 0.05);
//       C[i] = (C[i] - nickel * 0.05).toFixed(2);
//       coins += nickel + ' ';

//       const peny = parseInt(C[i] / 0.01);
//       C[i] = (C[i] - peny * 0.01).toFixed(2);
//       coins += peny + '';

//       console.log(coins);
//     }
//   });
