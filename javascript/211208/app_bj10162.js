const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));
function bj10162(input) {
  let N = strToNumArr(input.shift());

  const ABtn = parseInt(N / 300);
  N %= 300;

  const BBtn = parseInt(N / 60);
  N %= 60;

  const CBtn = parseInt(N / 10);
  N %= 10;

  if (N !== 0) {
    return -1;
  }

  return `${ABtn} ${BBtn} ${CBtn}`;
}

export default bj10162;

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

//     const ABtn = parseInt(N / 300);
//     N %= 300;

//     const BBtn = parseInt(N / 60);
//     N %= 60;

//     const CBtn = parseInt(N / 10);
//     N %= 10;

//     if (N !== 0) {
//       console.log(-1);
//     } else {
//       console.log(`${ABtn} ${BBtn} ${CBtn}`);
//     }
//   });
