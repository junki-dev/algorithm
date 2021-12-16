function bj2846(input) {
  let [A, B] = input[0].split(' ');

  const minA = Number(A.replace(/6/g, '5'));
  const minB = Number(B.replace(/6/g, '5'));

  const maxA = Number(A.replace(/5/g, '6'));
  const maxB = Number(B.replace(/5/g, '6'));

  return `${minA + minB} ${maxA + maxB}`;
}

export default bj2846;

/** 제출 */
// const input = [];

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let [A, B] = input[0].split(' ');

//     const minA = Number(A.replace(/6/g, '5'));
//     const minB = Number(B.replace(/6/g, '5'));

//     const maxA = Number(A.replace(/5/g, '6'));
//     const maxB = Number(B.replace(/5/g, '6'));

//     console.log(`${minA + minB} ${maxA + maxB}`);
//   });
