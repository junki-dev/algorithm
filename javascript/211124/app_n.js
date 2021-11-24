/**
 * n을 나눈값이 1이되는 가장 작은 자연수
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  let answer = 1;
  while (1 === 1) {
    if (n % answer === 1) {
      break;
    }
    answer++;
  }
  return answer;
}

export default solution;
