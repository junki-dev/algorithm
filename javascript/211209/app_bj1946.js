/** 작업중 */
function bj1946(N, applicant) {
  applicant.sort((a, b) => a[0] - b[0]);
  console.log(N, applicant);

  let start = 0;
  let end = 1;
  while (start < end) {
    if (applicant[start][1] > applicant[end][1]) {
      applicant.splice(end, 1);
    } else {
      end++;
    }

    console.log(applicant);

    break;
  }
}

// export default bj1789;

/** 제출 */
const input = [];
const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    let T = parseInt(input[0]);

    let line = 1;
    let N = 0;
    let applicant = [];
    for (let i = 1; i <= T; i++) {
      N = parseInt(input[line]);
      line += 1;
      for (let j = line; j < line + N; j++) {
        applicant.push(strToNumArr(input[j]));
      }
      bj1946(N, applicant);
      line += N;
      applicant = [];
    }

    console.log(applicant);
  });
