const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));
function bj16953(input) {
  const values = input.map((str) => strToNumArr(str));
  const target = values[0][0];
  let num = values[0][1];
  let count = 0;

  while (num > 0) {
    if (num < target) {
      count = -1;
      break;
    } else if (num === target) {
      count++;
      break;
    } else if (num % 10 === 1) {
      num = parseInt(num * 0.1);
      count++;
    } else if (num % 2 === 0) {
      num /= 2;
      count++;
    } else {
      count = -1;
      break;
    }
  }

  return count;
}

export default bj16953;

/** 제출 */
// const input = [];
// const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     const values = input.map((str) => strToNumArr(str));
//     const target = values[0][0];
//     let num = values[0][1];
//     let count = 0;

//     while (num > 0) {
//       if (num < target) {
//         count = -1;
//         break;
//       } else if (num === target) {
//         count++;
//         break;
//       } else if (num % 10 === 1) {
//         num = parseInt(num * 0.1);
//         count++;
//       } else if (num % 2 === 0) {
//         num /= 2;
//         count++;
//       } else {
//         count = -1;
//         break;
//       }
//     }

//     console.log(count);
//   });
