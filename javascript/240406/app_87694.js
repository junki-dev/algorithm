// https://school.programmers.co.kr/learn/courses/30/lessons/87694
function solution(rectangle, characterX, characterY, itemX, itemY) {
  // 좌표 * 2
  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;
  const dRec = rectangle.map((rec) => rec.map((point) => point * 2));

  // 방향 설정
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  // 큐에 시작 위치 담기
  const start = [characterX, characterY, 0];
  let q = [start];

  // 범위 0으로 채우기
  let range = Array.from({ length: 103 }, () => Array(103).fill(0));

  // 테두리 = 1, 내부 = 2
  dRec.forEach(([x1, y1, x2, y2]) => {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (i === x1 || i === x2 || j === y1 || j === y2) {
          if (range[i][j] === 0) {
            range[i][j] = 1;
          }
        } else {
          range[i][j] = 2;
        }
      }
    }
  });

  // 시작 위치 = 0
  range[characterX][characterY] = 0;

  // bsf
  while (q.length) {
    let [x, y, count] = q.shift();

    if (x === itemX && y === itemY) {
      return count / 2;
    }

    for (let i = 0; i < 4; i++) {
      let mx = x + dx[i];
      let my = y + dy[i];
      if (range[mx][my] === 1) {
        q.push([mx, my, count + 1]);
        range[mx][my] = 0;
      }
    }
  }

  return 0;
}

const result = solution(
  [
    [1, 1, 7, 4],
    [3, 2, 5, 5],
    [4, 3, 6, 9],
    [2, 6, 8, 8],
  ],
  1,
  3,
  7,
  8
);
console.log(`>>> result = ${result}`);
