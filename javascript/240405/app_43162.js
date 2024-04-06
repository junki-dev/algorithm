// https://school.programmers.co.kr/learn/courses/30/lessons/43162
function solution(n, computers) {
  let answer = 0;

  const visited = Array.from({ length: n }, () => false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  function dfs(i) {
    visited[i] = true;

    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  }

  return answer;
}

const result = solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);
console.log(`>>> result = ${result}`);
