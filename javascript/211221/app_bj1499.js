const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));

function bj1499(input) {
  let [N, M] = strToNumArr(input.shift());
  let waste = strToNumArr(input.shift());
  waste.sort((a, b) => a - b);

  let tapes = 0;
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (tapes < waste[i]) {
      count++;
      tapes = waste[i] + M - 1;
    }
  }

  return count;
}

export default bj1499;

// /** 제출 */
// let input = [];
// const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let [N, M] = strToNumArr(input.shift());
//     let waste = strToNumArr(input.shift());
//     waste.sort((a, b) => a - b);

//     let tapes = 0;
//     let count = 0;
//     for (let i = 0; i < N; i++) {
//       if (tapes < waste[i]) {
//         count++;
//         tapes = waste[i] + M - 1;
//       }
//     }

//     console.log(count);
//   });
