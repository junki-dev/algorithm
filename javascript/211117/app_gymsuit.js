/**
 * Greedy 연습, 프로그래머스 체육복
 * https://programmers.co.kr/learn/courses/30/lessons/42862
 */
function gymSuit(n, lost, reserve) {
  let answer = n;

  lost.sort(function (a, b) {
    return a - b;
  });
  reserve.sort(function (a, b) {
    return a - b;
  });

  const newLost = lost.filter((element) => !reserve.includes(element));
  const newReserve = reserve.filter((element) => !lost.includes(element));

  for (let i = 0; i < newReserve.length; i++) {
    for (let j = 0; j < newLost.length; j++) {
      if (i === 0 && newReserve[i] === newLost[j] + 1) {
        newLost.shift();
      } else if (newReserve[i] === newLost[j] - 1 || newReserve[i] === newLost[j] + 1) {
        newLost.shift();
      }
    }
  }

  return answer - newLost.length;
}

export default gymSuit;
