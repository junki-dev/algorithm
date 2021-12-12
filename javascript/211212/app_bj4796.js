const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));
function bj4796(input) {
  let values = input.map((str) => strToNumArr(str));

  values = values.slice(0, -1);

  for (let i = 0; i < values.length; i++) {
    const limit = values[i][0];
    const place = values[i][1];
    let vacation = values[i][2];
    let day = 0;

    while (vacation > place) {
      vacation -= place;
      day += limit;
    }

    if (vacation < limit) {
      day += vacation;
    } else {
      day += limit;
    }

    return day;
  }
}

export default bj4796;

/** 제출 */
// const input = [];
// const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let values = input.map((str) => strToNumArr(str));

//     values = values.slice(0, -1);

//     for (let i = 0; i < values.length; i++) {
//       const limit = values[i][0];
//       const place = values[i][1];
//       let vacation = values[i][2];
//       let day = 0;

//       while (vacation > place) {
//         vacation -= place;
//         day += limit;
//       }

//       if (vacation < limit) {
//         day += vacation;
//       } else {
//         day += limit;
//       }

//       console.log(`Case ${Number(i + 1)}: ${Number(day)}`);
//     }
//   });
