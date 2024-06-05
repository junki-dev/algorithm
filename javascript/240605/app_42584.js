// https://school.programmers.co.kr/learn/courses/30/lessons/42584

function solution(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      count++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    answer.push(count);
  }

  return answer;
}

const result = solution([1, 2, 3, 2, 3]);
console.log(`>>> result = ${result}`);
