function solution(edges) {
  let answer = new Array(4).fill(0);
  let graph = {};

  for (const [startNode, endNode] of edges) {
    if (!graph[startNode]) {
      graph[startNode] = [0, 0];
    }

    if (!graph[endNode]) {
      graph[endNode] = [0, 0];
    }

    graph[startNode][0]++;
    graph[endNode][1]++;
  }

  // 그래프들과 무관한 정점 추출
  for (const key in graph) {
    if (graph[key][0] >= 2 && graph[key][1] === 0) {
      answer[0] = Math.max(answer[0], key);
    }
  }

  let total = graph[answer[0]][0];
  for (const [startNode, endNode] of edges) {
    if (startNode !== answer[0]) {
      continue;
    }

    graph[endNode][1]--;
  }

  for (const key in graph) {
    if (graph[key][0] === 0 && graph[key][1] >= 0) {
      // 막대 모양 그래프
      answer[2]++;
    } else if (graph[key][0] === 2 && graph[key][1] === 2) {
      // 8자 모양 그래프
      answer[3]++;
    }
  }

  // 전체 그래프 그룹 갯수(anonymous node 진출 차수)에서 막대와 8자 그래프 갯수를 뺀 값이 도넛 그래프 갯수이다.
  answer[1] = total - (answer[2] + answer[3]);

  return answer;
}

const result = solution([
  [4, 11],
  [1, 12],
  [8, 3],
  [12, 7],
  [4, 2],
  [7, 11],
  [4, 8],
  [9, 6],
  [10, 11],
  [6, 10],
  [3, 5],
  [11, 1],
  [5, 3],
  [11, 9],
  [3, 8],
]);

console.log(result);
