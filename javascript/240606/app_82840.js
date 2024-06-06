// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(sizes) {
  let maxWidth = Math.max();
  let maxHeight = Math.max();
  for (const size of sizes) {
    const width = size[0] > size[1] ? size[0] : size[1];
    const height = width === size[0] ? size[1] : size[0];

    if (maxWidth < width) {
      maxWidth = width;
    }

    if (maxHeight < height) {
      maxHeight = height;
    }
  }

  return maxHeight * maxWidth;
}

const result = solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
console.log(`>>> result = ${result}`);
