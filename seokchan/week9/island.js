function solution(maps) {
  // 1. 전주(week8) gameMap과 같이 n,m으로 지도를 정의
  const n = maps.length;
  const m = maps[0].length;

  /**
   * 2. 방문 여부 저장
   * 2차원 배열(visited) 생성
   * ex) n = 2, m = 4 n의 숫자 만큼의 배열 생성 [n, n]
   *   m의 숫자 만큼 그 안에 배열을 false로 채움 -> [[false, false, false, false], [false, false, false, false]]
   *   즉 2x4의 직사각형이 되고 방문 여부를 위해 false로 다 채워둔 것, 방문을 하게 되면 여기서 true로 변경해서 방문 여부를 체크하게 됨.
   */
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  /**
   * 3. gameMap과 같이 directions에 상하좌우 이동 배열을 만듬
   */
  const directions = [
    [1, 0], // 하
    [-1, 0], // 상
    [0, 1], // 우
    [0, -1], // 좌
  ];

  let answer = [];

  /**
   * 5. dfs 함수
   * gameMap과 크게 다른점
   * 너비 탐색(bfs)이 아닌 깊이 탐색(dfs)
   * 해당 문제는 한 경로를 끝까지 탐색한 후 더 진행이 안되면 돌아가서 다른 경로를 탐색해야됨. (섬 하나를 돌면 끝이 아니라 다른 섬이 있는지 체크해야되서)
   */

  function dfs(i, j) {
    let sum = 0; // 섬에서 획득한 식량을 모두 합한 값을 저장
    const stack = [[i, j]];
    visited[i][j] = true; // 시작 위치의 방문 처리
    while (stack.length) {
      // 아래 stack.push가 있어서 push를 안할때까지 계속 반복됨.
      const [x, y] = stack.pop();

      sum += Number(maps[x][y]); // string으로 되어있어서 number로 바꿔야함

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < m &&
          !visited[nx][ny] &&
          maps[nx][ny] !== "X"
        ) {
          visited[nx][ny] = true; // 해당 칸을 방문 처리
          stack.push([nx, ny]); // 스택에 추가하여 dfs 계속 진행
        }
      }
    }
    return sum;
  }

  /**
   * 4. 전체 맵을 순회함.
   * false인 경우 dfs 함수를 호출함
   * 방문을 안하고 x가 아닌 곳을 찾아서 dfs를 돌고 해당 섬의 식량을 answer에 푸쉬해줌.
   * 이 for문이 있어야 한개 섬만 체크하고 끝내는게 아니라 다른 섬까지 체크함.
   */

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && maps[i][j] !== "X") {
        const islandSum = dfs(i, j); // dfs(i. j) = sum값을 가지고 있고 sum 값은 그 섬의 식량을 합한 것. 이것을 islandsum에 넣어서 answer에 푸쉬함.
        answer.push(islandSum);
      }
    }
  }

  if (answer.length === 0) return [-1]; // 다 돌았는데도 answer가 비어있으면 -1을 리턴하도록

  return answer.sort((a, b) => a - b); // 오름차순으로 변경
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"]));
console.log(solution(["XXX", "XXX", "XXX"]));
