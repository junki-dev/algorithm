function bj1744(input) {
  let N = Number(input[0]);
  const posNums = [];
  const negNums = [];
  let zeroCount = 0;
  let result = 0;

  for (let i = 1; i <= N; i++) {
    const inputNum = Number(input[i]);

    if (inputNum === 0) {
      zeroCount++;
    } else if (inputNum === 1) {
      result += 1;
    } else {
      if (inputNum > 0) {
        posNums.push(inputNum);
      } else {
        negNums.push(inputNum);
      }
    }
  }

  posNums.sort((a, b) => b - a);
  negNums.sort((a, b) => a - b);

  for (let i = 0; i < negNums.length; i++) {
    if (i + 1 > negNums.length - 1) {
      if (zeroCount > 0) {
        zeroCount--;
        break;
      } else {
        result += negNums[i];
      }
    } else {
      result += negNums[i] * negNums[i + 1];
      i++;
    }
  }

  for (let i = 0; i < posNums.length; i++) {
    if (i + 1 > posNums.length - 1) {
      result += posNums[i];
      break;
    }

    result += posNums[i] * posNums[i + 1];
    i++;
  }

  return result;
}

export default bj1744;

/** 제출 */
// const input = [];

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let N = Number(input[0]);
//     const posNums = [];
//     const negNums = [];
//     let zeroCount = 0;
//     let result = 0;

//     for (let i = 1; i <= N; i++) {
//       const inputNum = Number(input[i]);

//       if (inputNum === 0) {
//         zeroCount++;
//       } else if (inputNum === 1) {
//         result += 1;
//       } else {
//         if (inputNum > 0) {
//           posNums.push(inputNum);
//         } else {
//           negNums.push(inputNum);
//         }
//       }
//     }

//     posNums.sort((a, b) => b - a);
//     negNums.sort((a, b) => a - b);

//     for (let i = 0; i < negNums.length; i++) {
//       if (i + 1 > negNums.length - 1) {
//         if (zeroCount > 0) {
//           zeroCount--;
//           break;
//         } else {
//           result += negNums[i];
//         }
//       } else {
//         result += negNums[i] * negNums[i + 1];
//         i++;
//       }
//     }

//     for (let i = 0; i < posNums.length; i++) {
//       if (i + 1 > posNums.length - 1) {
//         result += posNums[i];
//         break;
//       }

//       result += posNums[i] * posNums[i + 1];
//       i++;
//     }

//     console.log(result);
//   });
