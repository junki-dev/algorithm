// https://school.programmers.co.kr/learn/courses/30/lessons/12971

function solution(sticker) {
  if (sticker.length === 1) {
    return sticker[0];
  }

  let len = sticker.length + 2;
  const dp1 = Array.from({ length: len }).fill(0);
  const dp2 = Array.from({ length: len }).fill(0);

  for (let i = 2; i < len; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i - 2]);
  }

  for (let i = 3; i < len; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i - 2]);
  }

  return Math.max(dp1[len - 2], dp2[len - 1]);
}

const result = solution([14, 6, 5, 11, 3, 9, 2, 10]);
console.log(`>>> result = ${result}`);
