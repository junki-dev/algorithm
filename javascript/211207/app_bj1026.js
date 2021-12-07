const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));
function bj1026(input) {
  let N = strToNumArr(input.shift());
  const values = input.map((str) => strToNumArr(str));

  const A = values[0].sort((a, b) => a - b);
  const B = values[1].sort((a, b) => b - a);
  let S = 0;
  for (let i = 0; i < N; i++) {
    S += A[i] * B[i];
    console.log(`A[i]-${A[i]} B[i]-${B[i]} S-${S}`);
  }

  return S;
}

export default bj1026;

/** 제출 */
// const input = [];
// const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let N = strToNumArr(input.shift());
//     const values = input.map((str) => strToNumArr(str));

//     const A = values[0].sort((a, b) => a - b);
//     const B = values[1].sort((a, b) => b - a);
//     let S = 0;
//     for (let i = 0; i < N; i++) {
//       S += A[i] * B[i];
//       console.log(`A[i]-${A[i]} B[i]-${B[i]} S-${S}`);
//     }

//     console.log(S);
//   });
