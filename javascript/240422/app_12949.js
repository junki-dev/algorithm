// https://school.programmers.co.kr/learn/courses/30/lessons/12949#

function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const temp = [];

    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }

      temp.push(sum);
    }
    answer.push(temp);
  }

  return answer;
}

const result = solution(
  [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],
  [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ]
);
console.log(`>>> result = ${result}`);
