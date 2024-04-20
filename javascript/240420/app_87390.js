// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  let arr = [];

  while (left <= right) {
    arr.push(Math.max(Math.floor(left / n), left % n) + 1);
    left++;
  }

  return arr;
}

const result = solution(3, 2, 5);
console.log(`>>> result = ${result}`);
