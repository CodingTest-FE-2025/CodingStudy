function solution(park, routes) {
  let start = [0, 0];
  let h = park.length;
  let w = park[0].length;
  let dir = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (park[i][j] === "S") {
        start = [i, j];
        break;
      }
    }
  }

  for (let i = 0; i < routes.length; i++) {
    let [d, n] = [routes[i][0], parseInt(routes[i].slice(1))];
    let [dy, dx] = dir[d];
    let [ny, nx] = [...start];
    let valid = true;
    for (let step = 1; step <= n; step++) {
      let ty = ny + dy * step;
      let tx = nx + dx * step;

      if (ty < 0 || ty >= h || tx < 0 || tx >= w || park[ty][tx] === "X") {
        valid = false;
        break;
      }
    }

    if (valid) {
      start[0] += dy * n;
      start[1] += dx * n;
    }
  }
  return start;
}
