// https://school.programmers.co.kr/learn/courses/30/lessons/64064

function solution(user_id, banned_id) {
  const visited = Array.from({ length: banned_id.length }).fill(false);
  const regex = banned_id.map(
    (id) => new RegExp(`^${id.replaceAll("*", ".")}$`)
  );
  const resultSet = new Set();

  function dfs(idx = 0, arr = []) {
    if (arr.length === banned_id.length) {
      resultSet.add(arr.sort().join(","));
    } else {
      for (let i = 0; i < user_id.length; i++) {
        if (visited[i]) {
          continue;
        }

        if (user_id[i].match(regex[idx])) {
          visited[i] = true;
          dfs(idx + 1, [...arr, user_id[i]]);
          visited[i] = false;
        }
      }
    }
  }

  dfs();

  return resultSet.size;
}

const result = solution(
  ["frodo", "fradi", "crodo", "abc123", "frodoc"],
  ["fr*d*", "abc1**"]
);
console.log(`>>> result = ${result}`);
