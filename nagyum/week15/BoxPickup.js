function solution(n, w, num) {
  const h = Math.floor((n - 1) / w) + 1;
  const layer = Math.floor((num - 1) / w);
  let col;

  if (layer % 2 === 0) {
    col = (num - 1) % w;
  } else {
    col = w - 1 - ((num - 1) % w);
  }

  let count = 0;
  for (let l = layer; l < h; l++) {
    let idx;
    if (l % 2 === 0) {
      idx = l * w + col + 1;
    } else {
      idx = (l + 1) * w - col;
    }

    if (idx <= n) count++;
  }

  return count;
}
