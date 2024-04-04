// https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);
  function dfs(x, value) {
    if (x < numbers.length) {
      dfs(x + 1, value + numbers[x]);
      dfs(x + 1, value - numbers[x]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  }

  return answer;
}

const result = solution([1, 1, 1, 1, 1], 3);
console.log(`>>> result = ${result}`);
