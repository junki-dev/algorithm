const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));

function bj1932(input) {
  let N = strToNumArr(input.shift());
  const values = input.map((str) => strToNumArr(str)).sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  const stack = [];
  stack.push(values[0][1]);

  for (let i = 1; i < N; i++) {
    if (stack[stack.length - 1] <= values[i][0]) {
      stack.push(values[i][1]);
    }
  }

  return stack.length;
}

export default bj1932;
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
//     const values = input.map((str) => strToNumArr(str)).sort((a, b) => a[1] - b[1] || a[0] - b[0]);

//     const stack = [];
//     stack.push(values[0][1]);

//     for (let i = 1; i < N; i++) {
//       if (stack[stack.length - 1] <= values[i][0]) {
//         stack.push(values[i][1]);
//       }
//     }

//     console.log(stack.length);
//   });
