// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(s) {
  const stack = [];

  for (let c of s) {
    if (c === "(") {
      stack.push(1);
    } else {
      if (!stack.length) {
        return false;
      }

      stack.pop();
    }
  }

  return !stack.length;
}

const result = solution("()()");
console.log(`>>> result = ${result}`);
