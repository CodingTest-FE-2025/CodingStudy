/**
 * ROR 게임은 두 팀으로 나누어 진행하며, 상대 팀 진영을 먼저 파괴하며 이기는 게임이다.
 * 따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리하다.
 * 한팀의 팀원이 되어 게임을 진행하려고 한다. 5X5 크기의 맵에 당신의 캐릭터가 (행:1, 열:1)에 있고,
 * 상대 팀 진영은(행:5, 열:5)에 있다. 맵의 크기와 캐릭터의 위치, 장애물의 위치가 주어질 때,
 * 캐릭터가 상대 팀 진영에 최단거리로 도착하기 위해 이동해야 하는 칸의 개수를 구하시오.
 * 상대팀이 자신의 팀 진영 주위에 벽을 세워두었다면 상대팀 진영에 도착하지 못할 수도 있다.
 * 게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대팀 진영에 도착하기 위해서 지나가야하는 칸의 개수의 최솟값을 리턴.
 * 단, 상대팀 진영에 도착할 수 없을 때는 -1을 리턴한다.
 */

/**
 * 제한사항
 * maps는 n x m 크기의 게임 맵이다.
 * n, m은 1이상 100이하이다.
 * n과 m은 서로 같을 수도, 다를 수도 있다.
 * maps는 0과 1로만 이루어져 있으며, 0은 벽이있는 자리, 1은 벽이 없는 자리를 나타낸다.
 * 처음에 캐릭터는 (1,1)에 있으며, 상대팀 진영은 (n,m)에 있다.
 */

/**
 * 입출력 예
 * maps =[
 * [1,0,1,1,1]
 * [1,0,1,0,1]
 * [1,0,1,1,1]
 * [1,1,1,0,1]
 * [0,0,0,0,1] ]return 11
 *
 * maps = [
 *  [1,0,1,1,1]
 *  [1,0,1,0,1]
 *  [1,0,1,1,1]
 *  [1,1,1,0,0]
 *  [0,0,0,0,1]] return -1
 */
//이번거는 BFS로 풀어야할 것 같다. 어떻게 적용을 시킬까...흠..

function solution(maps) {
  let n = maps.length; // 행
  let m = maps[0].length; // 열
  let dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // 상하좌우

  // bfs
  const bfs = () => {
    let queue = [[0, 0, 1]]; // 행, 열, 이동거리, 시작위치 (0,0)과 이동거리 1을 큐에 넣음
    maps[0][0] = 0; // 방문한 위치는 0으로 변경하여 재방문 방지

    while (queue.length > 0) {
      //큐가 비어있지 않는 동안 반복
      let [row, col, distance] = queue.shift(); // 현재 위치와 이동거리 가져오기

      // 적 팀 진영 도착시 값 리턴
      if (row == n - 1 && col == m - 1) {
        return distance;
      }

      // 상하좌우 이동 여부 확인
      for (let [r, c] of dir) {
        let newRow = row + r;
        let newCol = col + c; //현재 위치에서 상하좌우로 이동한 새로운 위치

        // 새로운 위치가 맵 내에 있고 벽이 아닐 시 이동 가능
        if (
          newRow >= 0 &&
          newRow < n &&
          newCol >= 0 &&
          newCol < m &&
          maps[newRow][newCol] === 1
        ) {
          queue.push([newRow, newCol, distance + 1]); //이동 가능한 위치를 큐에 추가
          maps[newRow][newCol] = 0; // 방문한 위치를 0으로 표시
        }
      }
    }
    return -1; // 상대 팀 진영에 도착할 수 없으면 -1을 반환
  };

  return bfs();
}

//참고자료 https://velog.io/@eldoradodo/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-JavaScript-%EA%B2%8C%EC%9E%84-%EB%A7%B5-%EC%B5%9C%EB%8B%A8%EA%B1%B0%EB%A6%AC-a3l8xukk
//https://han-joon-hyeok.github.io/posts/programmers-game-map-shortest-path/
