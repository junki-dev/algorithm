// https://school.programmers.co.kr/learn/courses/30/lessons/12945
function solution(n) {
  let answer = 0;
  let n1 = 0;
  let n2 = 1;

  for (let i = 2; i <= n; i++) {
    answer = (n1 + n2) % 1234567;
    n1 = n2;
    n2 = answer;
  }

  return answer;
}

const result = solution(3);
console.log(`>>> result = ${result}`);
