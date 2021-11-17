/**
 * Greedy 알고리즘
 * 동전 교환 문제
 * 10원, 50원, 100원, 500원, 1000원이 있을 때, n원를 교환할 수 있는 최소 동전 개수를 구하라.
 */
let coins = [1000, 500, 100, 50, 10];
const coinsCount = (n) => {
  let count = 0;

  for (let i = 0; i < coins.length; i++) {
    while (n >= coins[i]) {
      n -= coins[i];
      count++;
    }
  }

  return count;
};

export default coinsCount;
