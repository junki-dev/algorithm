// https://school.programmers.co.kr/learn/courses/30/lessons/181926
function solution(n, control) {
  let result = n;
  for (const c of control) {
    switch (c) {
      case "w":
        result += 1;
        break;
      case "s":
        result -= 1;
        break;
      case "d":
        result += 10;
        break;
      case "a":
        result -= 10;
        break;
    }
  }

  return result;
}

const result = solution(0, "wsdawsdassw");
console.log(`>>> result = ${result}`);
