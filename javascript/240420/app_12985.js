// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  let round = 1;

  while (a !== b) {
    round++;

    a = Math.floor(a / 2 + (a % 2));
    b = Math.floor(b / 2 + (b % 2));
  }

  return round - 1;
}

const result = solution(8, 4, 7);
console.log(`>>> result = ${result}`);
