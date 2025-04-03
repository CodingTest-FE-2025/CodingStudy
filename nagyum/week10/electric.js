/** 전력망 둘로 나누기
 * n개의 송전탑이 트리 모양으로 하나를 끊어서 2개의 네트워크로 분리를 원함
 * 최대한 비슷한 숫자로 나누기
 * 하나씩 끊고 비교해서 가장 차이가 적은걸로 고르면 됨
 */

function solution(n, wires) {
  let minDiff = Infinity;

  // 간선 하나씩 끊어보기
  for (let i = 0; i < wires.length; i++) {
    // 간선 제외하고 그래프 구성
    const graph = Array.from({ length: n + 1 }, () => []);
    wires.forEach(([a, b], idx) => {
      if (i === idx) return; // 이번에 끊을 간선은 제외
      graph[a].push(b);
      graph[b].push(a);
    });

    // BFS로 한 쪽 네트워크 개수 세기
    const visited = Array(n + 1).fill(false);
    const queue = [1];
    visited[1] = true;
    let count = 1;

    while (queue.length) {
      const current = queue.shift();
      for (const next of graph[current]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
          count++;
        }
      }
    }

    const diff = Math.abs(n - count - count); // 두 네트워크의 차이
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}
