function solution(bandage, health, attacks) {
  const lastSec = attacks[attacks.length - 1][0];
  const firstSec = attacks[0][0];

  let latestHealth = health;
  let attack = attacks.shift();
  let coolTime = firstSec % bandage[0];

  console.log(`firstSec: ${firstSec}, lastSec: ${lastSec}`);
  console.log(`latestHealth: ${latestHealth}, attack: ${attack}, coolTime: ${coolTime}`);
  console.log(`================================================================`);

  for (let i = firstSec; i <= lastSec; i++) {
    console.log(`secondSec: ${i}`);
    if (attack[0] === i) {
      // attack
      latestHealth -= attack[1];
      console.log(`attack: ${attack}, latestHealth: ${latestHealth}`);
      attack = attacks.shift();
    } else {
      // heal
      latestHealth = heal(latestHealth, health, 1);
      coolTime += 1;
      console.log(`latestHealth: ${latestHealth}, coolTime: ${coolTime}`);
    }

    if (coolTime === bandage[0]) {
      coolTime = 0;
      console.log(`skills, latestHealth: ${latestHealth}, amount: ${bandage[2]}`);
      latestHealth = heal(latestHealth, health, bandage[2]);
    }

    if (latestHealth < 1) {
      // die
      return -1;
    }
  }

  return latestHealth;
}

function heal(latestHealth, max, amount) {
  if (latestHealth + amount >= max) {
    return max;
  } else if (latestHealth + amount < 1) {
    return -1;
  } else {
    return latestHealth + amount;
  }
}

// bandage 기술의 시전 시간, 1초당 회복량, 추가 회복량
// const bandage = [5, 1, 5];
const bandage = [4, 2, 7];

// health 최대 체력
const health = 20;

// attacks 몬스터의 공격 시간과 피해량을 담은 2차원 정수 배열
const attacks = [
  [1, 15],
  [5, 16],
  [8, 6],
];

const answer = solution(bandage, health, attacks);
console.log(answer);
