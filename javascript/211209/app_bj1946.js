function bj1946(N, applicant) {
  applicant.sort((a, b) => a[0] - b[0]);

  let min = applicant[0][1];
  let count = 1;
  for (let i = 1; i < N; i++) {
    if (min > applicant[i][1]) {
      min = applicant[i][1];
      count++;
    }
  }

  return count;
}

export default bj1946;

// const input = [];
// const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let T = parseInt(input[0]);

//     let line = 1;
//     let N = 0;
//     let applicant = [];
//     for (let i = 1; i <= T; i++) {
//       N = parseInt(input[line]);
//       line += 1;
//       for (let j = line; j < line + N; j++) {
//         applicant.push(strToNumArr(input[j]));
//       }
//       const count = bj1946(N, applicant);
//       console.log(count);
//       line += N;
//       applicant = [];
//     }
//   });
