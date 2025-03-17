function solution(maps) {
  const n = maps.length; // 맵의 행 수 (예: 5)
  const m = maps[0].length; // 맵의 열 수 (예: 5)

  // 4방향 이동: 아래, 위, 오른쪽, 왼쪽
  const directions = [
    [1, 0], // 아래로 한 칸 이동
    [-1, 0], // 위로 한 칸 이동
    [0, 1], // 오른쪽으로 한 칸 이동
    [0, -1], // 왼쪽으로 한 칸 이동
  ];

  // BFS를 위한 큐: 각 원소는 [현재 행, 현재 열, 시작부터 현재까지 이동한 칸 수] 형태로 저장합니다.
  const queue = [];
  // 시작 위치는 (0, 0)이고, 문제에서는 (1, 1)이지만 배열 인덱스 기준으로 (0,0)입니다.
  // 초기 이동 칸의 수를 1로 설정합니다.
  queue.push([0, 0, 1]);

  // 큐에 요소가 남아있는 동안 반복합니다.
  while (queue.length > 0) {
    // 큐의 첫 번째 요소를 꺼냅니다.
    const [row, col, dist] = queue.shift();

    // 현재 위치가 목표 위치(맨 오른쪽 아래, 즉 (n-1, m-1))에 도달했으면,
    // 지금까지 이동한 칸 수(dist)를 반환합니다.
    if (row === n - 1 && col === m - 1) {
      return dist;
    }

    // 4방향으로 이동 가능한지 검사합니다.
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      // 조건: 새로운 위치가 맵 안에 있어야 하고, 이동할 수 있는 칸(값이 1)이어야 합니다.
      if (
        newRow >= 0 &&
        newRow < n && // 행 범위 확인
        newCol >= 0 &&
        newCol < m && // 열 범위 확인
        maps[newRow][newCol] === 1 // 이동 가능(1)인지 확인
      ) {
        // 해당 칸을 방문 처리하기 위해 0으로 변경하여 재방문을 막습니다.
        maps[newRow][newCol] = 0;
        // 새로운 위치와, 이동 횟수를 1 증가시켜 큐에 추가합니다.
        queue.push([newRow, newCol, dist + 1]);
      }
    }
  }

  // 큐가 빈 상태까지 목표 위치에 도달하지 못하면, 목표에 도달할 수 없으므로 -1을 반환합니다.
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
); // -1 (도착 x)
