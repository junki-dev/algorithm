// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  for (let i = 1; i <= Math.ceil(yellow / 2); i++) {
    const h = i;
    const w = yellow / h;

    if ((w + 2) * 2 + h * 2 === brown) {
      return [w + 2, h + 2];
    }
  }
}

const result = solution(10, 2);
console.log(`>>> result = ${result}`);
