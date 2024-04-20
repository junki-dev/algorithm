// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  let answer = 0;

  const wantMap = new Map();
  for (let i = 0; i < want.length; i++) {
    wantMap.set(want[i], number[i]);
  }

  for (let i = 0; i < discount.length - 9; i++) {
    const tenDiscount = discount.slice(i, i + 10);
    const discountMap = new Map();

    for (const dis of tenDiscount) {
      if (!discountMap.has(dis)) {
        discountMap.set(dis, 1);
      } else {
        discountMap.set(dis, discountMap.get(dis) + 1);
      }
    }

    if (compare(wantMap, discountMap)) {
      answer++;
    }
  }

  return answer;
}

function compare(origin, target) {
  for (const [key, value] of target) {
    if (!origin.has(key)) {
      return false;
    }

    if (origin.get(key) !== value) {
      return false;
    }
  }

  return true;
}

const result = solution(
  ["banana", "apple", "rice", "pork", "pot"],
  [3, 2, 2, 2, 1],
  [
    "chicken",
    "apple",
    "apple",
    "banana",
    "rice",
    "apple",
    "pork",
    "banana",
    "pork",
    "rice",
    "pot",
    "banana",
    "apple",
    "banana",
  ]
);
console.log(`>>> result = ${result}`);
