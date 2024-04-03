// https://school.programmers.co.kr/learn/courses/30/lessons/181925
function solution(numLog) {
  let previousNum = numLog[0];
  let answer = "";

  for (let i = 1; i < numLog.length; i++) {
    let nextNum = numLog[i];

    if (nextNum - previousNum === 1) {
      answer += "w";
    } else if (nextNum - previousNum === -1) {
      answer += "s";
    } else if (nextNum - previousNum === 10) {
      answer += "d";
    } else if (nextNum - previousNum === -10) {
      answer += "a";
    }

    previousNum = nextNum;
  }

  return answer;
}

const result = solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);
console.log(`>>> result = ${result}`);
