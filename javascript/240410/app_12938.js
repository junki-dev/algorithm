// https://school.programmers.co.kr/learn/courses/30/lessons/12938
function solution(n, s) {
  if (n > s) {
    return [-1];
  }

  const avg = Math.floor(s / n);
  const arr = Array.from({ length: n }, () => avg);
  let remain = s - avg * n;

  let idx = 0;
  while (remain) {
    arr[idx]++;
    idx++;
    remain--;
  }

  return arr.sort((a, b) => a - b);
}

const result = solution(2, 9);
console.log(`>>> result = ${result}`);
