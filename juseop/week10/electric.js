/**
 * 전력망을 둘로 나누기
 *
 * n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결.
 * 전선들 중 하나늘 끊어서 현재의 전력망 네트워크를 2개로 분할하려함.
 * 두 전력망이 갖게 되는 송전탑의 개수를 최대한 비슷하게 맞추고자 함.
 * 송전탑의 개수는 n, 전선 정보 wires가 매개변수로 주어짐.
 * 전선들 중 하나를 끊어서 송전탑 개수가 가능한 비슷하도록 두 전력망으로 나누었을 때,
 * 두 전력망이 가지고 있는 송전탑 개수의 차이(절댓값)를 return.
 *
 * 입출력 예
 * n = 9, wires = [[1,3],[2,3],[3,4],[4,5],[6,7],[7,8],[7,9]] => return 3
 * n = 4, wires = [[1,2],[2,3],[3,4]] => return 0
 * n = 7, wires = [[1,2],[2,3],[3,4],[4,5],[6,7]] => return 1
 *
 * 무조건 하나의 전선만 끊을 수 있음.
 */
//1. 모든 노드는 간선으로 이어져 있다.
//2. 각 노드는 최소 1개 이상의 간선이 존재한다.
//3. 노드와 노드를 이어주는 간선을 하나 제거하고, 이때 분리된 그룹의 노드 수를 비교.
//4. 결과값은 비교한 값 중 제일 작은 값.
//5. DFS를 통해 노드의 개수를 구하는 방법을 사용한다.

function solution(n, wires) {
  let answer = [];
  let graph = [...Array(n + 1)].map(() => []); // 인접리스트 방식으로 표현된 그래프
  for (let i = 0; i < wires.length; i++) {
    //양방향 그래프 구성
    const [a, b] = wires[i];
    graph[a].push(b);
    graph[b].push(a);
  }
  //각 전선을 끊고 두개의 트리로 나눔
  for (let i = 0; i < wires.length; i++) {
    let separated = JSON.parse(JSON.stringify(graph)); // 방문 여부 초기화
    const [a, b] = wires[i]; // 끊을 간선
    separated[a] = separated[a].filter((e) => e !== b); // 끊을 간선의 노드 방문 처리
    separated[b] = separated[b].filter((e) => e !== a); // 끊을 간선의 노드 방문 처리
    //dfs를 이용해 송전탑 개수 계산
    const visited = [];
    function dfs(node) {
      let count = 1; // 연결된 송전탑 수
      visited[node] = true;

      for (const adjacentNode of separated[node]) {
        if (!visited[adjacentNode]) {
          count += dfs(adjacentNode); // 연결된 송전탑 수 증가
        }
      }
      return count;
    }
    let result = dfs(a); // a에서 시작
    answer.push(Math.abs(result - (n - result))); // 두 전력망의 송전탑 개수 차이    }
  }
  return Math.min(...answer); // 최소값 반환
}
