// https://school.programmers.co.kr/learn/courses/30/lessons/42884#
function solution(routes) {
  const camera = [];

  routes.sort((a, b) => a[1] - b[1]);
  for (const route of routes) {
    if (
      route[0] <= camera[camera.length - 1] &&
      camera[camera.length - 1] <= route[1]
    ) {
      continue;
    } else {
      camera.push(route[1]);
    }
  }

  return camera.length;
}

const result = solution([
  [-20, -15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
]);
console.log(`>>> result = ${result}`);
