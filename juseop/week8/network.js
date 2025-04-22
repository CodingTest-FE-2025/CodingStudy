/**
 * 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미한다.
 * 예를들어 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어 있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때
 * 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있다.
 * 따라서 컴퓨터 A,b,c는 모두 같은 네트워크 상에 있다고 할 수 있다.
 * 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때,
 * 네트워크의 개수를 return 하도록 solution 함수를 작성하라.
 */
/**
 * 제한사항
 * 컴퓨터의 개수 n은 1이상 200이하인 자연수이다.
 * 각 컴퓨터는 0부터 n-1인 정수로 표현한다.
 * i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현한다.
 * computer[i][i]는 항상 1이다.
 *
 * 입출력 예제
 * n = 3, computers = [[1,1,0],[1,1,0],[0,0,1]] return 2
 * n = 3, computers = [[1,1,0],[1,1,1],[0,1,1]] return 1
 */

// 1. DFS를 이용하여 풀어야 할 것 같다.
// 2. 방문한 컴퓨터는 visited 배열을 이용하여 체크한다.
// Array(n) : 길이가 n인 빈 배열을 생성 .fill(false) : 배열의 모든 요소를 false로 채움.
// 이 배열은 visited 변수에 저장되며, visited[i]가 false면 방문하지 않은 노드, true면 방문하 노드이다.
function solution(n, computers) {
  let answer = 0;
  let visited = Array(n).fill(false); // 방문 여부 체크

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i); // 아직 방문하지 않은 노드를 발견하면 DFS탐색 시작
      answer++; // 하나의 네트워크를 찾으면 증가
    }
  }
  //i번째 컴퓨터가 방문되지 않았다면, dfs(i)를 호출해서 해당 네트워크의 모든 컴퓨터 방문
  //DFS탐색이 끝난 후 answer++ 해줘서 네트워크 개수를 증가.
  function dfs(index) {
    visited[index] = true; //현재 노드를 방문 처리
    for (let i = 0; i < n; i++) {
      if (computers[index][i] === 1 && !visited[i]) {
        dfs(i); // 연결된 노드를 따라가면서 계속 방문
      }
    }
  } // dfs(index)함수는 현재 컴퓨터(index)를 방문한 후, 연결된 다른 컴퓨터들도 탐색
  //computers[index][i]===1이면, index와 i가 연결되어 있다는 뜻.
  // !visited[i]이면 아직 방문하지 않은 컴퓨터 이므로 dfs(i)를 재귀호출해서 계속 탐색
  return answer; // 모든 네트워크를 찾고나서 answer를 반환
}
