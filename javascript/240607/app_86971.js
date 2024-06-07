// https://school.programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
  let min = Math.min();

  let tree = Array.from(Array(n + 1), () => []);
  wires.map((el) => {
    const [a, b] = el;

    tree[a].push(b);
    tree[b].push(a);
  });

  function bfs(root, except) {
    let count = 0;
    let visited = [];
    let queue = [root];

    visited[root] = true;

    while (queue.length) {
      let idx = queue.pop();

      console.log(
        `root=${root}, except=${except} count=${count}, visited=${visited}, queue=${queue}, idx=${idx}, tree[idx]=${tree[idx]}`
      );
      tree[idx].forEach((el) => {
        if (el !== except && !visited[el]) {
          visited[el] = true;
          queue.push(el);
        }
      });

      count++;
    }

    return count;
  }

  wires.forEach((el) => {
    let [a, b] = el;
    min = Math.min(min, Math.abs(bfs(a, b) - bfs(b, a)));
  });

  return min;
}

const result = solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);
// const result = solution(2, [
//   [1, 3],
//   [2, 3],
// ]);
// const result = solution(4, [
//   [1, 2],
//   [1, 3],
//   [1, 4],
// ]);
console.log(`>>> result = ${result}`);
