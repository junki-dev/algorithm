// https://school.programmers.co.kr/learn/courses/30/lessons/1844?language=javascript
function solution(maps) {
  let answer = 0;

  const visited = Array.from(
    {
      length: maps.length,
    },
    () => new Array(maps[0].length).fill(false)
  );
  const distance = Array.from(
    {
      length: maps.length,
    },
    () => new Array(maps[0].length).fill(0)
  );

  const queue = [];
  queue.push([0, 0]);

  visited[0][0] = true;
  distance[0][0] = 1;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.length) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const x = curX + dx[i];
      const y = curY + dy[i];

      if (x > -1 && x < maps.length && y > -1 && maps[0].length) {
        if (maps[x][y] === 1 && !visited[x][y]) {
          queue.push([x, y]);
          visited[x][y] = true;

          if (distance[x][y] === 0) {
            distance[x][y] = distance[curX][curY] + 1;
          }
        }
      }
    }
  }

  return distance[maps.length - 1][maps[0].length - 1]
    ? distance[maps.length - 1][maps[0].length - 1]
    : -1;
}

const result = solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);
console.log(`>>> result = ${result}`);
