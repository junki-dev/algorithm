// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  let lowerS = s.toLowerCase();

  return lowerS
    .split(" ")
    .map((splitS) => splitS.charAt(0).toUpperCase() + splitS.slice(1))
    .join(" ");
}

const result = solution("3people unFollowed me");
console.log(`>>> result = ${result}`);
