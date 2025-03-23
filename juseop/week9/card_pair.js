/**
 * 카드 짝 맞추기
 *
 * 게임이 시작되면 화면에는 16장이 윗면을 위로 하여 4x4로 놓여진다.
 * 각 카드의 앞면에는 카카오 프렌즈 캐릭터 중 하나가 그려져 있다.
 * 8가지 캐틱터 글미이 그려진 카드가 각기 2장씩 화면에 무작위로 배치되어 있다.
 * 유저가 카드를 2장 선택하여 앞면으로 뒤집었을 때 같은 그림이 그려진 카드면 해당 카드는
 * 게임 화면에서 사라지며, 같은 그림이 아니라면 원래 상태로 뒷면이 보이도록 뒤집힌다.
 * 이와 같은 방법으로 모든 카드를 화면에서 사라지게 하면 게임이 종료
 *
 * 카드는 커서를 이용하여 선택가능
 * 커서는 4X4 화면에서 유저가 선택한 현재 위치를 표시하는 굵고 빨간 테투리 상자
 *
 * 커서는 [Ctrl]키와 방향키를 이용하여 이동 가능
 * 방향키 <-, ->, ^, v를 누르면, 커서가 누른키 방향으로 1칸 이동
 * [Ctrl] 키를 누른상태에서 방향키 <-, ->, ^, v를 누르면, 누른 키 방향으로
 * 가장 가까운 카드로 한번에 이동(만약에 해당 방향에 카드가 하나도 없다면 그방향의 가장 마지막칸으로 이동)
 * 만약 누른 키 방향으로 이동 가능한 카드 또는 빈 공간이 없어 이동할 수 없다면 커서는 움직이지 않는다.
 *
 * 커서가 위치한 카드를 뒤집기 위해서는 [Enter]키를 입력
 * [Enter] 키를 입력해서 카드를 뒤집었을 때
 * 앞면이 보이는 카드가 1장 뿐이라면 그림을 맞출 수 없으므로 두번째 카드를 뒤집을 때까지 앞면을 유지한다.
 * 앞면이 보이는 카드가 2장이 된 경우, 두개의 카드에 그려진 그림이 같으면 해당 카드들이 화면에서 사라지며,
 * 그림이 다르다면 두 카드 모두 뒷면이 보이도록 다시 뒤집힌다.
 *
 * 게임 진행 중 카드의 짝을 맞춰 몇장 제거된 상태에서 카드 앞면의 그림을 알고 있다면, 남은 카드를 모두 제거하는데 필요한
 * 키 조작 횟수의 최솟값을 구해 보려고 한다. 키 조작 횟수는 방향키와 [Enter] 키를 누르는 동작을 각각
 * 조작횟수 1로 계산하며, [Ctrl] 키과 방향키를 함께 누르는 동작은 조작횟수 1로 계산한다.
 *
 *
 * 현재 카드가 놓인 상태를 나타내는 2차원 배열 Board와 커서의 처음 위치 r, c가 매개변수로 주어질 때,
 * 모든 카드를 제거하기 위한 키 조작 횟수의 최솟값을 return 하도록 solution 함수를 완성
 */

/**
 * 입출력 예
 * Board [[1,0,0,3],[2,0,0,0],[0,0,0,2],[3,0,1,0]], r 1, c 0 => 14
 * Board [[3,0,0,2],[0,0,1,0],[0,1,0,0],[2,0,0,3]], r 0, c 1 => 16
 */

// 1. [r,c] 초기위치에서 시작
// 2. 뒤집을 수 있는 모든 카드들 위치 찾기
// 3. 찾은 위치에서부터 같은 값을 갖고 있는 위치 찾기
// 4. 찾은 카드들의 개수가 목표 개수랑 같기 전까지 3번을 반복
// 5. 3번을 반복하는 동안 이동 횟수를 계산
// 6. 이동 횟수가 최소 값인 경우를 찾기

function solution(board, r, c) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; //상,하,좌,우
  //1. 카드위치 저장
  const cardMap = newMap();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (!cardMap.has(board[i][j])) {
        cardMap.set(board[i][j], []); // 카드 종류별 위치좌표를 값으로 저장.
      }
      cardMap.get(board[i][j]).push([i, j]); // 해당 숫자의 위치를 추가
    }
  }
}
//2. BFS를 이용한 최단 거리 탐색
function bfs(sr, sc, er, ec) {
  if (sr === er && sc === ec) return 0; // 같은위치면 이동 X

  let queue = [[sr, sc, 0]]; // 시작위치, 이동 횟수
  let visited = Array.from({ length: 4 }, () => Array(4).fill(false)); // 방문여부
  visited[sr][sc] = true; // 시작위치 방문처리

  while (queue.length) {
    let [r, c, moves] = queue.shift(); // 큐에서 좌표와 이동횟수를 꺼냄(다음 이동 가능한 곳 탐색)

    for (let [dr, dc] of directions) {
      let nr = r + dr;
      let nc = c + dc;
      // 일반 이동 (한칸씩)
      if (0 < nr && nr < 4 && 0 <= nc && nc < 4 && !visited[nr][nc]) {
        if (nr === er && nc === ec) return moves + 1;
        visited[nr][nc] = true;
        queue.push([nr, nc, moves + 1]);
      }
      // Ctrl 이동 (가장 가까운 카드로 이동)
      let cr = r,
        cc = c;
      while (0 <= cr + dr && cr + dr < 4 && 0 <= cc + dc && cc + dc < 4) {
        cr += dr;
        cc += dc;
        if (board[cr][cc] > 0) break; // 카드가 있으면 멈춤
      }
      if (!visited[cr][cc]) {
        if (cr === er && cc === ec) return moves + 1;
        visited[cr][cc] = true;
        queue.push([cr, cc, moves + 1]);
      }
    }
  }
  return Infinity; // 도달 불가능한 경우
}
//3. 백트래킹을 이용한 최소 이동 횟수 계산
function permute(order, r, c, moves) {
  if (order.length === 0) return moves; // 모든 카드 제거 완료

  let minMoves = Infinity;

  for (let i = 0; i < order.length; i++) {
    let card = order[i];
    let [[r1, c1], [r2, c2]] = cardMap.get(card);
    // 카드 짝을 제거하는 두가지 순서 확인
    let option1 = bfs(r, c, r1, c1) + bfs(r1, c1, r2, c2) + 2; //첫번째 카드
    let option2 = bfs(r, c, r2, c2) + bfs(r2, c2, r1, c1) + 2; // 두번째 카드
    //현재 선택한 카드를 제거하고 다음 탐색
    board[r1][c1] = 0;
    board[r2][c2] = 0;
    let nextOrder = order.slice(0, i).concat(order.slice(i + 1));

    minMoves = Math.min(
      // 갱신하면서 가장 작은 이동 횟수를 찾음.
      minMoves,
      permute(nextOrder, r2, c2, moves + option1),
      permute(nextOrder, r1, c1, moves + option2)
    );
    // 원래 상태로 복원 (백트래킹)
    board[r1][c1] = card;
    board[r2][c2] = card;
  }
  return minMoves;
}
return permute([...cardMap.keys()], r, c, 0); //cardMap의 키값을 배열로 만들어서 순열을 구함. 카드 종류 리스트를 가져옴.
//permute를 실행하여 모든 카드 쌍을 맞추는 최소 이동횟수를 찾음.

//1. 카드위치 저장 : 보드에서 각 숫자(카드 종류)에 대한 위치를 저장
//2. 최단거리 탐색 (BFS) : 특정 카드 위치까지 이동하는 최단 경로를 구함.
//3. 백트래킹(premute함수): 각 카드를 선택할 수 있는 모든 순서를 고려하여 이동횟수를 찾는다.
//   백트래킹을 사용해 방문했던 카드를 원래 상태로 복원한다.
//4. 최소 이동횟수를 반환.
//너무 어려워서 구글링을 통해 조금이라도 이해한 걸로 작성.

//https://velog.io/@hsw0194/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%B9%B4%EB%93%9C-%EC%A7%9D-%EB%A7%9E%EC%B6%94%EA%B8%B0-2021-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EB%B8%94%EB%9D%BC%EC%9D%B8%EB%93%9C-%EA%B3%B5%EC%B1%84
//https://weeeeey.tistory.com/179
//https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EB%B6%88%EB%9F%89-%EC%82%AC%EC%9A%A9%EC%9E%90-JS-iz8d5d6k
//https://yjg-lab.tistory.com/328
