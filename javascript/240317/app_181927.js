// https://school.programmers.co.kr/learn/courses/30/lessons/181927
function solution(num_list) {
  const list = num_list.slice();
  const lastNum = list[list.length - 1];
  const previousNum = list[list.length - 2];

  if (lastNum > previousNum) {
    list.push(lastNum - previousNum);
  } else {
    list.push(lastNum * 2);
  }

  return list;
}

const result = solution([2, 1, 6], [2165]);
console.log(`>>> result = ${result}`);
