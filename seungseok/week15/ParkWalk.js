// https://school.programmers.co.kr/learn/courses/30/lessons/172928

/**
 *
 * ["OSO","OOO","OXO","OOO"] 을
 * [[o,s,o],[o,o,o],[o,x,o],[o,o,o]] 으로 변경
 *
 * 시작위치 찾기 [0,1]
 *
 *
 * ["E 2","S 3","W 1"]을 for of문
 *
 *
 * E를 만나면 [0,1]
 * W를 만나면 [0,-1]
 * S를 만나면 [1,0]
 * N를 만나면 [-1,0]
 *
 */

function solution(park, routes) {
  // 공원 배열을 2차원 배열로 변환
  const map = park.map((row) => row.split(""));

  const x = park.findIndex((row) => row.includes("S")); // 행 인덱스
  let y = park[x].indexOf("S"); // 열 인덱스
  let posX = x,
    posY = y; // 위치 변수

  // 방향 벡터 정의
  const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  // 명령 처리
  for (const route of routes) {
    const [dir, distStr] = route.split(" ");
    const dist = Number(distStr);
    const [dx, dy] = directions[dir];

    let nx = posX;
    let ny = posY;
    let isValid = true;

    for (let i = 0; i < dist; i++) {
      nx += dx;
      ny += dy;

      // 범위 초과 or 장애물
      if (
        nx < 0 ||
        nx >= map.length ||
        ny < 0 ||
        ny >= map[0].length ||
        map[nx][ny] === "X"
      ) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      posX = nx;
      posY = ny;
    }
  }

  return [posX, posY];
}
