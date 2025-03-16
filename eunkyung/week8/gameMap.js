function solution(maps) {
  const rows = maps.length; //맵의 가로 크기 저장
  const cols = maps[0].length; //맵의 세로 크기 저장

  //네가지 이동 방향 저장
  const dirs = [
    [1, 0], //아래
    [0, 1], //오른쪽
    [-1, 0], //위
    [0, -1], //왼쪽
  ];

  const queue = [[0, 0, 1]]; // [row, col, distance]
  maps[0][0] = 0; // 방문한 곳은 0으로 표시하여 다시 방문하지 않도록 함

  while (queue.length > 0) {
    const [r, c, dist] = queue.shift();

    //목적지 도달 확인용
    if (r === rows - 1 && c === cols - 1) {
      return dist;
    }

    //상하좌우 탐색
    for (const [dr, dc] of dirs) {
      //이동후의 좌표
      const nr = r + dr;
      const nc = c + dc;

      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && maps[nr][nc] === 1) {
        queue.push([nr, nc, dist + 1]);
        maps[nr][nc] = 0;
      }
    }
  }

  return -1;
}

const map = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

console.log(solution(map)); // 11
