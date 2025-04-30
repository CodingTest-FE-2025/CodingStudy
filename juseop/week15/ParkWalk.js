/**
 * 공원 산책
 * 지나다니는 길을 "O", 장애물을 "X"로 나타낸 직사각형 격자 모양의 공원에서 산책한다.
 * 명령 입력 ["방향 거리", "방향 거리"..]
 * 예 "E5"는 로봇 강아지가 현재 위치에서 동쪽으로 5칸 이동.
 * 로봇 강아지는 명령을 수행하기 전에 두가지를 확인
 * 1. 주어진 방향으로 이동할 때 공원을 벗어나지 않는지.
 * 2. 장애물을 만나는지 확인
 * 위 두가지 중 어느하나라도 해당 된다면, 로봇 강아지는 해당 명령을 무시하고 다음명령 수행
 * 공원 가로 길이가 W, 세로길이가 H라고 할 때 공원의 좌측 상단 좌표는 (0,0)이고
 * 우측 하단 좌표는 (W-1, H-1)이다.
 * 공원을 나타내는 문자열 배열 Park, 로봇 강아지가 수행할 명령이 담긴 문자열 배열 routes가 주어질 때,
 * 로봇 강아지가 모든 명령을 수행 후 놓인 위치를 [세로 방향 좌표, 가로 방향 좌표] 순으로 배열에 담아 return 하도록 solution 함수를 완성해라.
 *
 * 제한 사항
 * 3<= park.length <=50
 * - 3<= park[i].length <=50
 * - park[i]는 S: 시작지점, O: 이동가능한 통로, X: 장애물인 문자들로만 이루어져 있다. 시작점은 하나만 존재
 * - 직사각형 모형
 * 1 <= routes.length <= 50
 *
 * 입출력 예시
 * park = ["SOO", "OOO", "OOO"], routes = ["E2", "S2", "W1"] result = [2, 1]
 * 동쪽으로 2칸 [0, 2] 남쪽으로 2칸 [2, 2] 서쪽으로 1칸 [2, 1]
 * park = ["SOO", "OXX", "OOO"], routes = ["E2", "S1", "W1"] result = [0, 1]
 * park = ["OSO", "OOO", "OXO", "OOO"], routes = ["E2", "S1", "W1"] result = [0, 0]
 */

//1. 시작점 찾기
//2. 이동 좌표 구하기
//3. 이동 좌표가 공원을 벗어나지 않는지 확인
//4. 이동 좌표가 장애물인지 확인
//5. 이동 좌표가 장애물이 아니라면 이동 좌표로 이동
//6. 이동 좌표가 장애물이라면 이동 좌표를 무시하고 다음 명령어 수행

function solution(park, routes) {
  let start = [0, 0];
  let h = park.length;
  let w = park[0].length;
  let dir = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] }; // 방향에 따른 좌표 변화
  // 시작점 찾기
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (park[i][j] === "S") {
        start = [i, j];
        break;
      }
    }
  }
  // 명령어 수행
  for (let i = 0; i < routes.length; i++) {
    let [d, n] = [routes[i][0], parseInt(routes[i].slice(1))];
    let [dy, dx] = dir[d];
    let [ny, nx] = [...start];
    let valid = true;
    for (let step = 1; step <= n; step++) {
      let nextY = ny + dy * step;
      let nextX = nx + dx * step;
      // 공원 범위를 벗어나거나 장애물 만나면 중단
      if (
        nextY < 0 ||
        nextY >= h ||
        nextX < 0 ||
        nextX >= w ||
        park[nextY][nextX] === "X"
      ) {
        valid = false;
        break;
      }
    }
    // 명령 유효할 경우 위치 갱신
    if (valid) {
      start[0] += dy * n;
      start[1] += dx * n;
    }
  }
  return start;
}
