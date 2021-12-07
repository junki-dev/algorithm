function bj1541(input) {
  const minusSplit = input[0].split('-');
  let result = 0;

  for (let i = 0; i < minusSplit.length; i++) {
    const plusSplit = minusSplit[i].split('+');
    let sum = 0;
    for (const num of plusSplit) {
      sum += Number(num);
    }

    if (i === 0) {
      result = sum;
    } else {
      result -= sum;
    }
  }

  return result;
}

export default bj1541;

/** 제출 */
// const input = [];

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     const minusSplit = input[0].split('-');
//     let result = 0;

//     for (let i = 0; i < minusSplit.length; i++) {
//       const plusSplit = minusSplit[i].split('+');
//       let sum = 0;
//       for (const num of plusSplit) {
//         sum += Number(num);
//       }

//       if (i === 0) {
//         result = sum;
//       } else {
//         result -= sum;
//       }
//     }

//     console.log(result);
//   });
