// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const half = nums.length / 2;
  const unique = new Set([...nums]).size;

  return half < unique ? half : unique;
}

const result = solution([3, 1, 2, 3]);
console.log(`>>> result = ${result}`);
