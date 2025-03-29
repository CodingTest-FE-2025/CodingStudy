/**
 * 백준 DFS와 BFS
 *
 * 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성
 * 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문,
 * 더 이상 방문할 수 있는 점이 없는 경우 종료한다.
 * 정점 번호는 1번부터 N번까지.
 *
 * 입력
 * 첫째 줄에 정점의 개수 N(1<=N<=1,000), 간선의 개수 M(1<=M<=10,000),
 * 탐색을 시작할 정점의 번호 V가 주어진다.
 * 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다.
 * 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.
 *
 * 출력
 * 첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다.
 * V부터 방문된 점을 순서대로 출력하면 된다.
 *
 * 예제 1
 * 4, 5, 1
 * 1, 2
 * 1, 3
 * 1, 4
 * 2, 4
 * 3, 4
 * 예제 1출력
 * 1, 2, 4, 3
 * 1, 2, 3, 4
 *
 * 예제 2
 * 5, 5, 3
 * 5, 4
 * 5, 2
 * 1, 2
 * 3, 4
 * 3, 1
 *
 * 예제 2출력
 * 3, 1, 2, 5, 4
 * 3, 1, 4, 2, 5
 *
 * 예제 3
 * 1000, 1, 1000
 * 999, 1000
 *
 * 예제 3출력
 * 1000, 999
 * 1000, 999
 */

//DFS로 갔을 때는 1에서 가장 작은수 2, 2에서 가장 작은수 4, 4에서 가장 작은수 3 순으로 탐색 중복된건 무시
//BFS로 갔을 때는 1에서 가장 작은수 2, 3, 4 순으로 탐색 중복된건 무시

//1. DFS의 스택 이용해서, 작은 번호부터 깊이 우선 탐색
//2. BFS의 큐 이용해서, 작은 번호부터 너비 우선 탐색
//3. 양방향 그래프이므로 graph[a][b] = 1, graph[b][a] = 1로 표기
//4. 출력순서를 정점 번호가 작은 것부터 정렬
//5. 중복 간선이 있을 수 있으므로, 중복 제거 필요.

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input[0].split(" ").map(Number);

//인접행렬 구하기
const graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(0)); // 인접 행렬

for (let i = 1; i <= M; i++) {
  let [row, column] = input[i].split(" ").map(Number);
  graph[row][column] = 1;
  graph[column][row] = 1;
} // graph[row][column] =1 이면 연결되어 있는것.

const DFS_visited = new Array(N + 1).fill(false);
const DFS_answer = [];
const BFS_visited = new Array(N + 1).fill(false);
const BFS_answer = [];

function DFS(V) {
  DFS_visited[V] = true;
  DFS_answer.push(V);
  for (let i = 1; i <= N; i++) {
    if (graph[V][i] === 1 && DFS_visited[i] === false) {
      DFS(i);
    }
  }
}
//DFS_visited 배열을 사용하여 중복 방문 방지
//현재 노드 v를 방문한 후 DFS_answer에 추가
//연결된 정점 중 방문하지 않은 정점이 있으면 스택 호출

function BFS(V) {
  const queue = [];
  BFS_visited[V] = true;
  BFS_answer.push(V);
  queue.push(V);

  while (queue.length !== 0) {
    let dequeue = queue.shift();
    for (let i = 1; i < graph.length; i++) {
      if (graph[dequeue][i] === 1 && BFS_visited[i] === false) {
        BFS_visited[i] = true;
        queue.push(i);
        BFS_answer.push(i);
      }
    }
  }
}
//BFS_visited 배열을 사용하여 중복 방문 방지
//queue 배열을 사용하여 FIFO(선입선출) 방식으로 탐색
//방문한 정점은 BFS_answer에 추가
//작은 번호부터 방문하기 위해 for문에서 1부터 N까지 탐색

DFS(V);
BFS(V);
//탐색 실행
console.log(DFS_answer.join(" "));
console.log(BFS_answer.join(" "));

//1. 인접행렬 구하기
// 인접 행렬은 노드간 연결이 되어있으면 1, 연결되어있지 않으면 0으로 표기하는 2차원 배열이다.
// 예제 1번의 입력값을 이용해 인접행렬을 만들면 아래와 같은 모습이다.
// INDEX가 0부터 시작하기 때문에 4x4아닌 5x5로 만들어야한다.
//2. DFS(깊이 우선 탐색) 실행
// 스택 또는 재귀를 이용해 탐색
// 정점 번호가 작은 것 부터 탐색
//3. BFS(너비 우선 탐색) 실행
// 큐를 이용해 탐색
// 정점 번호가 작은 것 부터 탐색
//4. 탐색결과 출력
