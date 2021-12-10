function bj1399(input) {
  let N = Number(input[0]);
  const alphabet = [];

  for (let i = 1; i <= N; i++) {
    const tmpArray = [];
    for (let j = 0; j < input[i].length; j++) {
      tmpArray.push(10 ** j + input[i][input[i].length - j - 1]);
    }
    alphabet.push(tmpArray);
  }

  const sumAlphabet = new Map();
  for (let i = 0; i < alphabet.length; i++) {
    for (const numAlpha of alphabet[i]) {
      if (!sumAlphabet.has(numAlpha[numAlpha.length - 1])) {
        sumAlphabet.set(numAlpha[numAlpha.length - 1], numAlpha);
      } else {
        const origin = sumAlphabet.get(numAlpha[numAlpha.length - 1]);
        const sum = Number(origin.slice(0, origin.length - 1)) + Number(numAlpha.slice(0, numAlpha.length - 1));
        sumAlphabet.set(numAlpha[numAlpha.length - 1], sum + numAlpha[numAlpha.length - 1]);
      }
    }
  }
  const mapSort = new Map(
    [...sumAlphabet.entries()].sort(
      (a, b) => Number(b[1].slice(0, b[1].length - 1)) - Number(a[1].slice(0, a[1].length - 1)),
    ),
  );

  let maxNum = 0;
  let counter = 9;
  mapSort.forEach((val) => {
    maxNum += Number(val.slice(0, val.length - 1)) * counter;
    counter--;
  });

  return maxNum;
}

export default bj1399;

/** 제출 */
// const input = [];
// const strToNumArr = (str) => str.split(' ').map((numString) => BigInt(numString));

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let N = Number(input[0]);
//     const alphabet = [];

//     for (let i = 1; i <= N; i++) {
//       const tmpArray = [];
//       for (let j = 0; j < input[i].length; j++) {
//         tmpArray.push(10 ** j + input[i][input[i].length - j - 1]);
//       }
//       alphabet.push(tmpArray);
//     }

//     const sumAlphabet = new Map();
//     for (let i = 0; i < alphabet.length; i++) {
//       for (const numAlpha of alphabet[i]) {
//         if (!sumAlphabet.has(numAlpha[numAlpha.length - 1])) {
//           sumAlphabet.set(numAlpha[numAlpha.length - 1], numAlpha);
//         } else {
//           const origin = sumAlphabet.get(numAlpha[numAlpha.length - 1]);
//           const sum = Number(origin.slice(0, origin.length - 1)) + Number(numAlpha.slice(0, numAlpha.length - 1));
//           sumAlphabet.set(numAlpha[numAlpha.length - 1], sum + numAlpha[numAlpha.length - 1]);
//         }
//       }
//     }
//     const mapSort = new Map(
//       [...sumAlphabet.entries()].sort(
//         (a, b) => Number(b[1].slice(0, b[1].length - 1)) - Number(a[1].slice(0, a[1].length - 1)),
//       ),
//     );

//     let maxNum = 0;
//     let counter = 9;
//     mapSort.forEach((val) => {
//       maxNum += Number(val.slice(0, val.length - 1)) * counter;
//       counter--;
//     });

//     console.log(maxNum);
//   });
