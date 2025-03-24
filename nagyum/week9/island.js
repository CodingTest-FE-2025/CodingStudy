function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(x, y) {
    if (
      x < 0 ||
      x >= n ||
      y < 0 ||
      y >= m ||
      visited[x][y] ||
      maps[x][y] === "X"
    ) {
      return 0;
    }

    visited[x][y] = true;
    let totalFood = Number(maps[x][y]);

    for (const [dx, dy] of directions) {
      totalFood += dfs(x + dx, y + dy);
    }

    return totalFood;
  }

  const result = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        result.push(dfs(i, j));
      }
    }
  }

  return result.length ? result.sort((a, b) => a - b) : [-1];
}
