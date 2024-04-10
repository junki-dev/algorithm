// https://school.programmers.co.kr/learn/courses/30/lessons/43163
function solution(begin, target, words) {
  const visited = { [begin]: 0 };
  const q = [begin];

  while (q.length) {
    const cur = q.shift();

    if (cur === target) {
      break;
    }

    for (const word of words) {
      if (isSimilar(cur, word) && !visited[word]) {
        visited[word] = visited[cur] + 1;
        q.push(word);
      }
    }
  }

  return visited[target] ?? 0;
}

function isSimilar(str1, str2) {
  let difference = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      difference++;
    }
  }

  return difference === 1;
}

const result = solution("hit", "cog", [
  "hot",
  "dot",
  "dog",
  "lot",
  "log",
  "cog",
]);
console.log(`>>> result = ${result}`);
