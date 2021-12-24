function bj1783(input) {
  let [N, M] = input[0].split(' ').map((e) => parseInt(e));
  let max = 0;

  if (N === 1) {
    max = 1;
  } else if (N === 2) {
    max = 4 > (M + 1) / 2 ? parseInt((M + 1) / 2) : 4;
  } else if (M < 7) {
    max = 4 < M ? 4 : M;
  } else {
    max = M - 7 + 5;
  }

  return max;
}

export default bj1783;

/** 제출 */
// const input = [];

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let [N, M] = input[0].split(' ').map(e => parseInt(e));
//     let max = 0

//     if (N === 1) {
//       max = 1
//     } else if (N === 2) {
//       max = 4 > (M + 1) / 2 ? (M + 1) / 2 : 4
//     } else if (M < 7) {
//       max = 4 < M ? 4 : M
//     } else {
//       max = M - 7 + 5
//     }

//     console.log(max)
//   });
