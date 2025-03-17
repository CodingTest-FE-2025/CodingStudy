function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 상, 하, 좌, 우 이동 방향 설정
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [[0, 0, 1]]; // [x좌표, y좌표, 이동 거리]

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    // 도착 지점에 도달한 경우 거리 반환
    if (x === n - 1 && y === m - 1) {
      return dist;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 유효한 범위 내에 있고, 이동 가능할 때
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
        maps[nx][ny] = 0; // 방문 처리 (재방문 방지)
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  return -1; // 도달 불가능한 경우
}
