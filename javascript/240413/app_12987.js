// https://school.programmers.co.kr/learn/courses/30/lessons/12987
function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  for (const a of A) {
    const bMax = B[B.length - 1];

    if (a < bMax) {
      answer++;
      B.pop();
    }
  }

  return answer;
}

const result = solution([5, 1, 3, 7][(2, 2, 6, 8)]);
console.log(`>>> result = ${result}`);
