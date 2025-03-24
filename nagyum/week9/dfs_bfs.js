const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dfs_bfs.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N, M, V] = input[0];
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i];
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const visitedDfs = Array(N + 1).fill(false);
const dfsResult = [];

function dfs(v) {
  visitedDfs[v] = true;
  dfsResult.push(v);

  for (let next of graph[v]) {
    if (!visitedDfs[next]) {
      dfs(next);
    }
  }
}

const visitedBfs = Array(N + 1).fill(false);
const bfsResult = [];

function bfs(start) {
  const queue = [start];
  visitedBfs[start] = true;

  while (queue.length) {
    const v = queue.shift();
    bfsResult.push(v);

    for (let next of graph[v]) {
      if (!visitedBfs[next]) {
        visitedBfs[next] = true;
        queue.push(next);
      }
    }
  }
}

dfs(V);
bfs(V);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
