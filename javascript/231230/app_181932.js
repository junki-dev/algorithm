function solution(code) {
  let mode = 0;
  let answer = '';

  for (let i = 0; i < code.length; i++) {
    if (!isNaN(code[i])) {
      mode = mode === 0 ? 1 : 0;
      continue;
    }

    if (mode === 0 && i % 2 === 0) {
      answer += code[i];
    } else if (mode === 1 && i % 2 !== 0) {
      answer += code[i];
    }
  }

  return answer ? answer : 'EMPTY';
}

const code = 'abc1abc1abc';
console.log(`solution is >>> ${solution(code)}`);
