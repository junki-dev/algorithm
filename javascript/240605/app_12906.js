// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  const stack = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (stack[stack.length - 1] !== arr[i]) {
      stack.push(arr[i]);
    }
  }

  return stack;
}

const result = solution([1, 1, 3, 3, 0, 1, 1]);
console.log(`>>> result = ${result}`);
