function solution(a, d, included) {
  let answer = 0;

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += a + d * i;
    }
  }

  return answer;
}

console.log(`>> solution ${solution(3, 4, [true, false, false, true, true])}`);
