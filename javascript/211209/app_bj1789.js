function bj1789(input) {
  let N = Number(input[0]);
  let count = 0;
  let num = 1;

  while (N !== 0) {
    N -= num;
    count++;
    num++;

    if (N - num < 0) {
      break;
    }
  }

  return count;
}

export default bj1789;

/** 제출 */
// const input = [];

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let N = Number(input[0]);
//     let count = 0;
//     let num = 1;

//     while (N !== 0) {
//       N -= num;
//       count++;
//       num++;

//       if (N - num < 0) {
//         break;
//       }
//     }

//     console.log(count);
//   });
