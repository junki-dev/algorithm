// https://school.programmers.co.kr/learn/courses/30/lessons/12979

function solution(n, stations, w) {
  let answer = 0;
  const coverage = w * 2 + 1;

  const lastIdx =
    n -
    stations.reduce((prev, cur) => {
      const appartments = cur - w - 1 - prev;
      answer += appartments > 0 ? Math.ceil(appartments / coverage) : 0;
      return cur + w;
    }, 0);

  if (lastIdx > 0) answer += Math.ceil(lastIdx / coverage);

  return answer;
}

const result = solution(11, [4, 11], 1);
console.log(`>>> result = ${result}`);
