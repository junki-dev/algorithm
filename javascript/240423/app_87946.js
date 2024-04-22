// https://school.programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
  let answer = -1;
  const visited = Array.from({ length: dungeons.length }, () => false);

  function dfs(health, round) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && health >= dungeons[i][0]) {
        visited[i] = true;
        dfs(health - dungeons[i][1], round + 1);
        visited[i] = false;
      }
    }

    answer = Math.max(answer, round);
  }

  dfs(k, 0);

  return answer;
}

const result = solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);
console.log(`>>> result = ${result}`);
