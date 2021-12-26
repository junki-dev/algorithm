function bj2847(input) {
  let N = input.shift();

  let scores = [];
  for (let i = 0; i < N; i++) {
    scores.push(Number(input.shift()));
  }

  let count = 0;
  for (let i = N - 2; i >= 0; i--) {
    while (scores[i] >= scores[i + 1]) {
      scores[i]--;
      count++;
    }
  }

  return count;
}

export default bj2847;

/** 제출 */
// const input = [];

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let N = input.shift();

//     let scores = [];
//     for (let i = 0; i < N; i++) {
//       scores.push(Number(input.shift()));
//     }

//     let count = 0;
//     for (let i = N - 2; i >= 0; i--) {
//       while (scores[i] >= scores[i + 1]) {
//         scores[i]--;
//         count++;
//       }
//     }

//     console.log(count);
//   });
