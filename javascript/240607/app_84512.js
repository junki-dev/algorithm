// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  const alpha = ["A", "E", "I", "O", "U"];
  const dict = [];

  function dfs(str, len) {
    if (len > 5) {
      return;
    }

    dict.push(str);

    for (let i = 0; i < alpha.length; i++) {
      dfs(str + alpha[i], len + 1);
    }
  }

  dfs("", 0);

  return dict.indexOf(word);
}

const result = solution("AAAAE");
console.log(`>>> result = ${result}`);
