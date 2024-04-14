// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  let answer = 0;
  arr.sort((a, b) => a - b);

  let idx = 1;
  while (true) {
    const target = arr[arr.length - 1] * idx;
    const result = arr.filter((num) => target % num !== 0);

    if (!result.length) {
      answer = target;
      break;
    }

    idx++;
  }

  return answer;
}

const result = solution([2, 6, 8, 14]);
console.log(`>>> result = ${result}`);
