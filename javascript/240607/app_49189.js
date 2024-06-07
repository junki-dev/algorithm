// https://school.programmers.co.kr/learn/courses/30/lessons/49189

function solution(n, edge) {
  const conn = Array.from({ length: n }, () => []);

  for (const e of edge) {
    conn[e[0] - 1].push(e[1] - 1);
    conn[e[1] - 1].push(e[0] - 1);
  }

  const visited = [1];
  const q = [0];
  while (q.length) {
    const cur = q.shift();

    for (const next of conn[cur]) {
      if (!visited[next]) {
        visited[next] = visited[cur] + 1;
        q.push(next);
      }
    }
  }

  return visited.filter((val) => val === Math.max(...visited)).length;
}

const result = solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
console.log(`>>> result = ${result}`);
