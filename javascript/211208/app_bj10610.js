const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));
function bj10610(input) {
  let N = input[0].split('').sort((a, b) => b - a);
  const zeroIdx = N.indexOf('0');

  if (zeroIdx < 0) {
    return -1;
  }
  N.splice(zeroIdx, 1);

  const sum = N.reduce((prev, next) => Number(prev) + Number(next));
  if (sum % 3 !== 0) {
    return -1;
  }
  return Number(N.join('') + '0');
}

export default bj10610;

/** 제출 */
// const input = [];

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let N = input[0].split('').sort((a, b) => b - a);
//     const zeroIdx = N.indexOf('0');
//     let result = '';

//     if (zeroIdx < 0) {
//       console.log(-1);
//     } else {
//       N.splice(zeroIdx, 1);

//       const sum = N.reduce((prev, next) => Number(prev) + Number(next));
//       if (sum % 3 !== 0) {
//         console.log(-1);
//       } else {
//         console.log(N.join('') + '0');
//       }
//     }
//   });
