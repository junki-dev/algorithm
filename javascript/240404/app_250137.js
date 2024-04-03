// https://school.programmers.co.kr/learn/courses/30/lessons/250137
function solution(bandage, health, attacks) {
  const lastAttackSec = attacks[attacks.length - 1][0];
  let [nextAttackSec, nextAttacksDamage] = attacks.shift();
  let weakenedHealth = health;
  let coolTime = 0;

  for (let i = 1; i <= lastAttackSec; i++) {
    if (i === nextAttackSec) {
      weakenedHealth -= nextAttacksDamage;
      coolTime = 0;
      if (attacks.length) {
        [nextAttackSec, nextAttacksDamage] = attacks.shift();
      }
    } else {
      weakenedHealth += bandage[1];
      coolTime += 1;

      if (coolTime === bandage[0]) {
        weakenedHealth += bandage[2];
        coolTime += 1;
      }

      if (weakenedHealth > health) {
        weakenedHealth = health;
      }
    }

    if (weakenedHealth < 1) {
      return -1;
    }
  }

  return weakenedHealth;
}

// const result = solution([5, 1, 5], 30, [
//   [2, 10],
//   [9, 15],
//   [10, 5],
//   [11, 5],
// ]);
const result = solution([3, 2, 7], 20, [
  [1, 15],
  [5, 16],
  [8, 6],
]);
console.log(`>>> result = ${result}`);
