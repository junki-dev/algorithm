// https://school.programmers.co.kr/learn/courses/30/lessons/12927

function solution(n, works) {
  if (works.reduce((acc, cur) => acc + cur, 0) <= n) {
    return 0;
  }

  works.sort((a, b) => b - a);

  while (n > 0) {
    const max = works[0];

    for (let i = 0; i < works.length; i++) {
      if (works[i] >= max) {
        works[i]--;
        n--;
      }

      if (!n) {
        break;
      }
    }
  }

  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}

const result = solution([4, 3, 3], 4);
console.log(`>>> result = ${result}`);
