// https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  let answer = 0;

  while (n) {
    if (n % 2 === 1) {
      n -= 1;
      answer++;
    } else {
      n /= 2;
    }
  }

  return answer;
}

const result = solution(5000);
console.log(`>>> result = ${result}`);
