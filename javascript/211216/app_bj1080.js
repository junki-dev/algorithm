function bj1080(input) {
  let tmp = input[0].split(' ').map((el) => parseInt(el));
  let N = tmp[0];
  let M = tmp[1];
  let listA = [];
  let listB = [];

  let A = input.slice(1, N + 1); //B배열
  let B = input.slice(N + 1); // A,B 배열을 이중배열로 만들고 int형으로 변환
  for (let i = 0; i < A.length; i++) {
    listA.push(A[i].split('').map((el) => parseInt(el)));
    listB.push(B[i].split('').map((el) => parseInt(el)));
  }

  let count = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = 0; j < M - 2; j++) {
      if (listA[i][j] !== listB[i][j]) {
        for (let k = i; k < i + 3; k++) {
          for (let l = j; l < j + 3; l++) {
            listA[k][l] = 1 - listA[k][l];
          }
        }
        count++;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (listA[i][j] !== listB[i][j]) {
        count = -1;
        break;
      }
    }
  }

  return count;
}

export default bj1080;

/** 제출 */
// let input = [];
// let listA = [];
// let listB = [];

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let tmp = input[0].split(' ').map((el) => parseInt(el));
//     let N = tmp[0];
//     let M = tmp[1];

//     let A = input.slice(1, N + 1); //B배열
//     let B = input.slice(N + 1); //A,B 배열을 이중배열로 만들고 int형으로 변환
//     for (let i = 0; i < A.length; i++) {
//       listA.push(A[i].split('').map((el) => parseInt(el)));
//       listB.push(B[i].split('').map((el) => parseInt(el)));
//     }

//     const result = solution(N, M);
//     console.log(result);
//   });

// async function solution(N, M) {
//   let count = 0;
//   for (let i = 0; i < N - 2; i++) {
//     for (let j = 0; j < M - 2; j++) {
//       if (listA[i][j] !== listB[i][j]) {
//         await convert(i, j);
//         count++;
//       }
//     }
//   }

//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < M; j++) {
//       if (listA[i][j] !== listB[i][j]) {
//         count = -1;
//         break;
//       }
//     }
//   }

//   return count;
// }

// async function convert(x, y) {
//   for (let i = x; i < x + 3; i++) {
//     for (let j = y; j < y + 3; j++) {
//       listA[i][j] = 1 - listA[i][j];
//     }
//   }
// }
