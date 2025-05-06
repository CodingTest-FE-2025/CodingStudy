function solution(n, w, num) {
  const lastHeight = Math.floor((n - 1) / w);
  const numHeight = Math.floor((num - 1) / w);

  const numDirection = numHeight % 2 === 0 ? "right" : "left";
  const numCol = getLocation(w, num, numDirection);

  let count = 1; // 자기 자신 포함

  for (let h = numHeight + 1; h <= lastHeight; h++) {
    const direction = h % 2 === 0 ? "right" : "left";
    const boxNum = getBoxNum(w, h, numCol, direction);
    if (boxNum <= n) {
      count++;
    }
  }
  return count;
}

function getLocation(w, num, direction) {
  const mod = num % w === 0 ? w : num % w;
  return direction === "right" ? mod - 1 : w - mod;
}

function getBoxNum(w, height, col, direction) {
  if (direction === "right") {
    return height * w + col + 1;
  } else {
    return height * w + (w - col);
  }
}
