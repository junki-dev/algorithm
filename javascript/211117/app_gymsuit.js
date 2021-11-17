/**
 * Greedy 연습, 프로그래머스 체육복
 * https://programmers.co.kr/learn/courses/30/lessons/42862
 */
function gymSuit(n, lost, reserve) {
  let answer = n - lost.length;

  lost.sort(function (a, b) {
    return a - b;
  });
  reserve.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === 1 && reserve[j] === lost[i] + 1) {
        answer++;
        lost.shift();
      } else if (reserve[j] === lost[i] - 1 || reserve[j] === lost[i] + 1) {
        answer++;
        lost.shift();
      }
    }
  }

  return answer - lost.length;
}

export default gymSuit;
