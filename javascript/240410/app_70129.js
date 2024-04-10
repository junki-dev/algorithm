// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let zeroCount = 0;
  let loopCount = 0;

  while (s > 1) {
    let num = s.replaceAll("0", "").length;

    zeroCount += s.length - num;
    loopCount++;

    s = num.toString("2");
  }

  return [loopCount, zeroCount];
}

const result = solution("110010101001");
console.log(`>>> result = ${result}`);
