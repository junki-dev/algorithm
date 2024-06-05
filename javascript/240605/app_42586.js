// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
  const durations = [];

  for (let i = 0; i < progresses.length; i++) {
    const progress = progresses[i];
    const speed = speeds[i];

    durations.push(Math.ceil((100 - progress) / speed));
  }

  const arr = [];
  let max = durations.shift();
  let count = 1;
  for (let i = 0; i < durations.length; i++) {
    if (max >= durations[i]) {
      count++;
    } else {
      arr.push(count);
      count = 1;
      max = durations[i];
    }
  }

  if (count > 0) {
    arr.push(count);
  }

  return arr;
}

const result = solution([93, 30, 55], [1, 30, 5], [2, 1]);
// const result = solution([95, 90, 99, 99, 80, 99],	[1, 1, 1, 1, 1, 1]	,[1, 3, 2]);
console.log(`>>> result = ${result}`);
