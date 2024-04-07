// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  const sortedS = s.split(" ").sort((a, b) => Number(a) - Number(b));

  return sortedS[0] + " " + sortedS[sortedS.length - 1];
}

const result = solution("1 2 3 4");
console.log(`>>> result = ${result}`);
