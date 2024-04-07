// https://school.programmers.co.kr/learn/courses/30/lessons/43105

function solution(triangle) {
  const len = triangle.length;
  const dp = Array.from({ length: len }, () => Array(len).fill(0));

  // 시작점
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] =
        triangle[i][j] + Math.max(dp[i - 1][j - 1] ?? 0, dp[i - 1][j] ?? 0);
    }
  }

  return dp[dp.length - 1].sort((a, b) => b - a)[0];
}

const result = solution([
  [7],
  [3, 8],
  [8, 1, 0],
  [2, 7, 4, 4],
  [4, 5, 2, 6, 5],
]);
console.log(`>>> result = ${result}`);
