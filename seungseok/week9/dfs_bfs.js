// https://www.acmicpc.net/problem/1260

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dfs_bfs.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// 1번째 줄: 정점 수 N, 간선 수 M, 시작 정점 V
// 정점이란 그래프에서 연결된 노드를 의미
// 간선이란 노드와 노드를 연결하는 선을 의미
// 시작 정점 V는 탐색을 시작할 정점
const [N, M, V] = input[0];

// 그래프 초기화 (인접 리스트 방식)
// 기존 그래프(간선 리스트)를 인접 리스트 방식으로 구현 이유
// : 인접 행렬 방식은 메모리 낭비가 심함 (제일 자주 사용하는 방식)
const graph = Array.from({ length: N + 1 }, () => []); // 0번 인덱스는 사용하지 않음 (1번부터 시작)
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i];
  graph[a].push(b);
  graph[b].push(a);
}

// 번호가 작은 정점부터 방문해야 하므로 정렬
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

// 여기까지 graph [ [], [ 2, 3, 4 ], [ 1, 4 ], [ 1, 4 ], [ 1, 2, 3 ] ]
// 0번 인덱스는 사용하지 않음 (1번부터 시작)
// 1번 정점은 2, 3, 4번 정점과 연결되어 있음
// 2번 정점은 1, 4번 정점과 연결되어 있음
// 3번 정점은 1, 4번 정점과 연결되어 있음
// 4번 정점은 1, 2, 3번 정점과 연결되어 있음

// DFS
// 방문 여부를 체크하기 위한 배열을 새로 생성
const visitedDfs = Array(N + 1).fill(false);
// 답 배열
const dfsResult = [];

function dfs(v) {
  visitedDfs[v] = true; // 방문 표시
  dfsResult.push(v); // 결과에 추가

  // 현재 정점과 연결된 정점들을 반복
  for (let next of graph[v]) {
    if (!visitedDfs[next]) {
      dfs(next); // 아직 안 간 곳 재귀
    }
  }
}

// BFS
// 방문 여부를 체크하기 위한 배열을 새로 생성
const visitedBfs = Array(N + 1).fill(false);
// 답 배열
const bfsResult = [];

function bfs(start) {
  const queue = [start]; // 큐 생성
  visitedBfs[start] = true; // 방문 표시

  // 큐가 빌 때까지 반복
  while (queue.length) {
    const v = queue.shift(); // 큐에서 하나를 꺼냄
    bfsResult.push(v); // 결과에 추가

    // 현재 정점과 연결된 정점들을 반복
    for (let next of graph[v]) {
      if (!visitedBfs[next]) {
        // 아직 안 간 곳이면
        visitedBfs[next] = true; // 방문 표시
        queue.push(next); // 큐에 추가
      }
    }
  }
}

dfs(V);
bfs(V);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
