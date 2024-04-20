// https://school.programmers.co.kr/learn/courses/30/lessons/138

function solution(k, tangerine) {
  const sizeMap = new Map();

  tangerine.forEach((t) => {
    if (sizeMap.has(t)) {
      sizeMap.set(t, sizeMap.get(t) + 1);
    } else {
      sizeMap.set(t, 1);
    }
  });

  const size = Array.from(sizeMap.values());
  size.sort((a, b) => b - a);

  let answer = 0;
  while (k > 0) {
    k -= size.shift();
    answer++;
  }

  return answer;
}

const result = solution(6, [1, 3, 2, 5, 4, 5, 2, 3]);
console.log(`>>> result = ${result}`);
