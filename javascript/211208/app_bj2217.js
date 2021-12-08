const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));
function bj2217(input) {
  let N = strToNumArr(input.shift());
  const ropes = input.map((str) => strToNumArr(str)).sort((a, b) => b - a);

  let maxW = -1;
  for (let i = 0; i < N; i++) {
    if (maxW < (i + 1) * ropes[i]) {
      maxW = (i + 1) * ropes[i];
    }
  }

  return maxW;
}

export default bj2217;

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
//     const ropes = input.map((str) => strToNumArr(str)).sort((a, b) => b - a);

//     let maxW = -1;
//     for (let i = 0; i < N; i++) {
//       if (maxW < (i + 1) * ropes[i]) {
//         maxW = (i + 1) * ropes[i];
//       }
//     }

//     console.log(maxW);
//   });
