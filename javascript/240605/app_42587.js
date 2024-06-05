// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  let answer = 0;
  const order = [];
  let max = -1;

  for (let i = 0; i < priorities.length; i++) {
    order.push(i);
  }

  while (priorities.length) {
    max = Math.max(...priorities);

    if (priorities[0] < max) {
      priorities.push(priorities.shift());
      order.push(order.shift());
    } else {
      answer++;
      priorities.shift();
      if (location === order.shift()) {
        return answer;
      }
    }
  }
}

const result = solution([2, 1, 3, 2], 2);
console.log(`>>> result = ${result}`);
