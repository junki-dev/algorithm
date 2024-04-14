// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  let result = true;
  let wordSet = new Set();
  let cur = words.shift();
  let idx = 1;

  wordSet.add(cur);

  while (words.length) {
    let next = words.shift();

    if (cur.charAt(cur.length - 1) !== next.charAt(0)) {
      result = false;
      break;
    }

    if (wordSet.has(next)) {
      result = false;
      break;
    }

    wordSet.add(next);
    cur = next;
    idx++;
  }

  if (result) {
    return [0, 0];
  }

  return [(idx % n) + 1, Math.floor(idx / n) + 1];
}

const result = solution(3, [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
]);
console.log(`>>> result = ${result}`);
