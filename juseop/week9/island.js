/**
 * 무인도 여행
 * 지도에는 바다와 무인도들에 대한 정보가 표시되어 있다.
 * 지도는 1X1크기의 사각형들로 이루어진 직사각형 격자 형태
 * 격자의 각 칸에는 X또는 1에서 9사이의 자연수가 적혀있다.
 * 지도의 X는 바다를 나타내며 숫자는 무인도를 나타낸다.
 * 이떄 상,하,좌,우로 인접한 무인도는 같은 무인도로 간주한다.
 * 지도의 각 칸에 적힌 숫자는 식량을 나타내는데 상,하,좌,우로 연결되는칸에
 * 적힌 숫자를 모두 더한 값은 해당 무인도에서 최대 며칠동안 머물 수 있는지를 나타낸다.
 * 지도를 나타내는 문자열 배열 maps가 매개변수로 주어질 때, 각 섬에서
 * 최대 며칠씩 머무를 수 있는지 배열에 오름차순으로 담아 return하는 solution 함수를 완성.
 * 만약 지낼 수 있는 무인도가 없다면 -1을 배열에 담아 return
 */

/**
 * 입출력 예
 * ["X591X", "X1X15X","X231X", "1XXX1"] => [1,1,27]
 * ["XXX","XXX","XXX"] => [-1]
 */

/**
 * 예제 1번
 * X, 5, 9, 1, X
 * X, 1, X, 5, X
 * X, 2, 3, 1, X
 * 1, X, X, X, 1
 */

//깊이 우선 탐색(DFS)을 이용하여 문제를 해결해야할 거 같은데..흠..
// 1. 우선 지도를 한바퀴 돌면서 무인도 위치를 파악
// 2. 무인도 위치를 파악한 후에 각 무인도의 식량을 파악
// 3. 각 무인도의 식량을 파악한 후에 상,하,좌,우로 이동하면서 식량을 더해줌.
// 4. 식량을 더해줄때 무인도가 아닌 경우에는 무시해줌.

function solution(maps) {
  const x = maps.length; //지도의 크기 저장 (행)
  const y = maps[0].length; // 지도의 크기 저장 (열)
  const visited = Array.from({ length: x }, () => Array(y).fill(false)); // 배열을 만들어 방문 여부확인
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]; // 상, 하, 좌, 우로 이동할 수 있는 방향을 저장

  function dfs(a, b) {
    let stack = [[a, b]]; // DFS를 위한 스택
    let totalFood = 0; // 무인도의 총 식량을 저장하는 변수

    while (stack.length) {
      let [cx, cy] = stack.pop(); // 스택에서 좌표를 꺼내옴.

      if (visited[cx][cy]) continue; //방문했던 공시면 continue로 무시
      visited[cx][cy] = true; // 방문하지 않은곳이면 ture로 방문을 체크
      totalFood += Number(maps[cx][cy]); // 무인도의 식량을 더해줌.

      for (let [dx, dy] of directions) {
        let nx = cx + dx,
          ny = cy + dy; // nx, ny를 계산하여 이동할 좌표를 구함.
        if (
          nx >= 0 &&
          nx < rows &&
          ny >= 0 &&
          ny < cols &&
          !visited[nx][ny] &&
          maps[nx][ny] !== "X" // 경계를 벗어나지 않고, 방문하지 않았으며, x가 아닌 곳이면 스택에 추가하여 탐색을 이어간다.
        ) {
          stack.push([nx, ny]);
        }
      }
    }

    return totalFood; // 총 식량 반환
  }

  let foodCounts = []; // 각 무인도의 식량 값을 저장.

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        // 무인도이면서 방문여부를 확인한 뒤 DFS를 실행
        foodCounts.push(dfs(i, j)); // DFS를 실행 후 반환된 총 식량 값을 배열에 추가
      }
    }
  }

  return foodCounts.length ? foodCounts.sort((c, d) => c - d) : [-1]; // foodCounts 배열이 비어있으면 무인도가 없는 경우이므로 [-1]을 반환 그렇지 않으면 오름차순으로 정렬한 후 결과를 반환.
}

//1. maps를 순회하며 무인도(숫자로 표현된 부분)을 찾는다.
//2. DFS탐색 : DFS탐색을 통해 활용하여 무인도를 탐색하며 상, 하, 좌, 우로 이동하면서 식량 값을 합산한다.
//3. 결과 정리 : 각 무인도의 총 식량 값을 배열에 저장하고 오름차순으로 정렬하여 반환
//4. 예외 처리 : 만약에 무인도가 하나도 없으면 [-1]을 반환한다.
