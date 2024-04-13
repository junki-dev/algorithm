// https://school.programmers.co.kr/learn/courses/30/lessons/12911
function solution(n) {
  const nCountOne = n
    .toString("2")
    .split("")
    .filter((b) => b === "1").length;

  for (let i = n + 1; i <= 1000000; i++) {
    let iCountOne = i
      .toString("2")
      .split("")
      .filter((b) => b === "1").length;
    if (nCountOne === iCountOne) {
      return i;
    }
  }

  return 0;
}

const result = solution(78);
console.log(`>>> result = ${result}`);
