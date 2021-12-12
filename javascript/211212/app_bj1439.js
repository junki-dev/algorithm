function bj1439(input) {
  let S = input.shift();
  let continues = false;
  let count = 0;

  for (let i = 1; i < S.length; i++) {
    if (S[0] === S[i]) {
      continues = false;
    } else {
      if (!continues) {
        count++;
        continues = true;
      }
    }
  }

  return count;
}

export default bj1439;

/** 제출 */
// const input = [];
// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let S = input.shift();
//     let continues = false;
//     let count = 0;
//     for (let i = 1; i < S.length; i++) {
//       if (S[0] === S[i]) {
//         continues = false;
//       } else {
//         if (!continues) {
//           count++;
//           continues = true;
//         }
//       }
//     }

//     console.log(count);
//   });
