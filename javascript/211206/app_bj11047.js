const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));

function bj11047(input) {
  let [N, K] = strToNumArr(input.shift());
  console.log(N, K);
  const values = input.map((v) => Number(v));
  values.sort((a, b) => b - a);

  let count = 0;
  for (let i = 0; i < N; i++) {
    if (N < 1) {
      break;
    }
    count += parseInt(K / values[i]);
    K -= parseInt(K / values[i]) * values[i];
  }

  return count;
}

export default bj11047;

// /** 제출 */
// const input = [];
// const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     console.log(input);
//     let [N, K] = strToNumArr(input.shift());
//     const values = input.map((v) => Number(v));
//     values.sort((a, b) => b - a);

//     let count = 0;
//     for (let i = 0; i < N; i++) {
//       if (N < 1) {
//         break;
//       }
//       count += parseInt(K / values[i]);
//       K -= parseInt(K / values[i]) * values[i];
//     }

//     console.log(count);
//   });
