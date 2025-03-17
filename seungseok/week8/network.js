function solution(n, computers) {
  let visited = Array(n).fill(false);
  let answer = 0;

  //본인노드 재귀탐색
  function dfs(node) {
    visited[node] = true;

    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (computers[node][neighbor] === 1 && !visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }
  //본인노드 끝나면 다음 노드로 넘어가기
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer++;
      dfs(i);
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
