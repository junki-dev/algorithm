// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => a - b); // 오름차순 정렬
  B.sort((a, b) => b - a); // 내림차선 정렬

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

const result = solution([1, 4, 2], [5, 4, 4]);
console.log(`>>> result = ${result}`);
