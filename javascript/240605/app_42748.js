// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  const answer = [];

  for (const command of commands) {
    let arr = JSON.parse(JSON.stringify(array)).splice(
      command[0] - 1,
      command[1] - command[0] + 1
    );

    arr = arr.sort((a, b) => a - b);
    answer.push(arr[command[2] - 1]);
  }

  return answer;
}

const result = solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
console.log(`>>> result = ${result}`);
