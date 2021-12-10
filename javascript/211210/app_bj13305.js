const strToNumArr = (str) => str.split(' ').map((numString) => BigInt(numString));
function bj13305(input) {
  let N = strToNumArr(input.shift());
  const values = input.map((str) => strToNumArr(str));
  const distances = values[0];
  const costs = values[1];

  let result = 0n;
  let min = costs[0];
  for (let i = 1; i < N; i++) {
    if (min < costs[i]) {
      result += min * distances[i - 1];
    } else {
      result += min * distances[i - 1];
      min = costs[i];
    }
  }

  return String(result);
}

export default bj13305;

/** 제출 */
// const input = [];
// const strToNumArr = (str) => str.split(' ').map((numString) => BigInt(numString));

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let N = strToNumArr(input.shift());
//     const values = input.map((str) => strToNumArr(str));
//     const distances = values[0];
//     const costs = values[1];

//     let result = 0n;
//     let min = costs[0];
//     for (let i = 1; i < N; i++) {
//       if (min < costs[i]) {
//         result += min * distances[i - 1];
//       } else {
//         result += min * distances[i - 1];
//         min = costs[i];
//       }
//     }

//     console.log(String(result));
//   });
