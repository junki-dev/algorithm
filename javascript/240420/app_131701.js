// https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
  const resultSet = new Set();
  const doubleElements = elements.concat(elements);
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      const target = doubleElements.slice(j, j + i + 1);
      resultSet.add(target.reduce((a, b) => a + b, 0));
    }
  }

  return resultSet.size;
}

const result = solution([7, 9, 1, 1, 4]);
console.log(`>>> result = ${result}`);
