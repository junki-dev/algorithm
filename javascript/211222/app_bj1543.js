function bj1543(input) {
  let document = input.shift();
  let word = input.shift();

  let count = 0;
  let pos = 0;
  while (true) {
    let now = document.indexOf(word, pos);
    if (now === -1) {
      break;
    }

    pos = now + word.length;
    count++;
  }

  return count;
}

export default bj1543;

/** 제출 */
// let input = [];

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let document = input.shift();
//     let word = input.shift();

//     let count = 0;
//     let pos = 0;
//     while (true) {
//       let now = document.indexOf(word, pos);
//       if (now === -1) {
//         break;
//       }

//       pos = now + word.length;
//       count++;
//     }

//     console.log(count);
//   });
