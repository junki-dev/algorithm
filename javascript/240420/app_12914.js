// https://school.programmers.co.kr/learn/courses/30/lessons/12914

function solution(n) {
  return fibo(n);
}

function fibo(n) {
  const dp = Array.from({ length: n + 1 }).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}

const result = solution(4);
console.log(`>>> result = ${result}`);
