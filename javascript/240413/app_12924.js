// https://school.programmers.co.kr/learn/courses/30/lessons/12924
function solution(n) {
  let answer = 2;

  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0 && i % 2 === 1) {
      answer++;
    }
  }

  return answer;
}

const result = solution(15);
console.log(`>>> result = ${result}`);
