function bj5585(input) {
  let money = 1000 - Number(input[0]);
  let count = 0;

  count += parseInt(money / 500);
  money %= 500;

  count += parseInt(money / 100);
  money %= 100;

  count += parseInt(money / 50);
  money %= 50;

  count += parseInt(money / 10);
  money %= 10;

  count += parseInt(money / 5);
  money %= 5;

  count += parseInt(money / 1);
  money %= 1;

  return count;
}

export default bj5585;

/** 제출 */
// const input = [];

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let money = 1000 - Number(input[0]);
//     let count = 0;

//     count += parseInt(money / 500);
//     money %= 500;

//     count += parseInt(money / 100);
//     money %= 100;

//     count += parseInt(money / 50);
//     money %= 50;

//     count += parseInt(money / 10);
//     money %= 10;

//     count += parseInt(money / 5);
//     money %= 5;

//     count += parseInt(money / 1);
//     money %= 1;

//     console.log(count);
//   });
