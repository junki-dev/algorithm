// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (isValid(s)) {
      answer++;
    }

    s = s.slice(1) + s[0];
  }

  return answer;
}

function isValid(s) {
  const stack = [];

  for (const c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      const last = stack.pop();
      if (last === "(" && c === ")") {
        continue;
      } else if (last === "{" && c === "}") {
        continue;
      } else if (last === "[" && c === "]") {
        continue;
      } else {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
}

const result = solution("[](){}");
console.log(`>>> result = ${result}`);
