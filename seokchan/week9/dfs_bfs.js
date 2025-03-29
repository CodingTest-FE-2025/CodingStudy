function solution(n, m, v, edges) {
  // 문제 이해를 위해 익숙한 프로그래머스 형태로 바꿔서 풀었음.
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  for (let i = 1; i <= n; i++) {
    graph[i].sort((a, b) => a - b);
  }

  const dfsResult = [];
  const visitedDFS = Array(n + 1).fill(false);

  function dfs(node) {
    visitedDFS[node] = true;
    dfsResult.push(node);
    for (const next of graph[node]) {
      if (!visitedDFS[next]) {
        dfs(next);
      }
    }
  }
  dfs(v);

  const bfsResult = [];
  const visitedBFS = Array(n + 1).fill(false);
  const queue = [];

  queue.push(v);
  visitedBFS[v] = true;
  while (queue.length) {
    const node = queue.shift();
    bfsResult.push(node);
    for (const next of graph[node]) {
      if (!visitedBFS[next]) {
        visitedBFS[next] = true;
        queue.push(next);
      }
    }
  }

  return [dfsResult.join(" "), bfsResult.join(" ")];
}

const n = 4;
const m = 5;
const v = 1;
const edges = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 4],
];

console.log(dfsResult); // 1 2 4 3
console.log(bfsResult); // 1 2 3 4
