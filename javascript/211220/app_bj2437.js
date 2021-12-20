function bj2437(input) {
  const n = input[0];
  const weights = input[1].split(' ').map((e) => parseInt(e));
  let answer = 0;

  weights.sort((a, b) => a - b);

  if (weights[0] != 1) {
    answer = 1;
  } else {
    let sum = weights[0];

    for (let i = 1; i < n; i++) {
      if (weights[i] <= sum + 1) {
        sum += weights[i];
      } else {
        break;
      }
    }

    answer = sum + 1;
  }

  return answer;
}

export default bj2437;

/** 제출 */
// let input = [];

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     const n = input[0];
//     const weights = input[1].split(' ').map((e) => parseInt(e));

//     weights.sort((a, b) => a - b);

//     if (weights[0] != 1) {
//       console.log(1);
//     } else {
//       let sum = weights[0];

//       for (let i = 1; i < n; i++) {
//         if (weights[i] <= sum + 1) {
//           sum += weights[i];
//         } else {
//           break;
//         }
//       }

//       console.log(sum + 1);
//     }
//   });
