function solution(park, routes) {
  const rowCount = park.length;
  const colCount = park[0].length;

  const direction = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  let row = 0;
  let col = 0;

  for (let r = 0; r < rowCount; r++) {
    const c = park[r].indexOf("S");
    if (c !== -1) {
      row = r;
      col = c;
      break;
    }
  }

  for (const route of routes) {
    const [dir, stepStr] = route.split(" ");
    const step = Number(stepStr);
    const [dr, dc] = direction[dir];

    let canMove = true;

    for (let i = 1; i <= step; i++) {
      const nr = row + dr * i;
      const nc = col + dc * i;

      const isOutOfBounds =
        nr < 0 || nr >= rowCount || nc < 0 || nc >= colCount;
      const isBlocked = park[nr]?.[nc] === "X";

      if (isOutOfBounds || isBlocked) {
        canMove = false;
        break;
      }
    }

    if (canMove) {
      row += dr * step;
      col += dc * step;
    }
  }

  return [row, col];
}
