// https://school.programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  const queue = Array.from({ length: bridge_length }, () => 0);

  let duration = 0;
  while (truck_weights.length) {
    duration++;
    queue.shift();
    const sum = queue.reduce((acc, cur) => acc + cur, 0);

    if (sum >= weight) {
      queue.push(0);
    } else {
      if (sum + truck_weights[0] <= weight) {
        queue.push(truck_weights.shift());
      } else {
        queue.push(0);
      }
    }
  }

  const sum = queue.reduce((acc, cur) => acc + cur, 0);
  if (sum > 0) {
    for (let i = queue.length - 1; i >= 0; i--) {
      if (queue[i] !== 0) {
        duration += i + 1;
        break;
      }
    }
  }

  return duration;
}

const result = solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
console.log(`>>> result = ${result}`);
