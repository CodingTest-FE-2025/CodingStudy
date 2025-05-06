function solution(n, w, num) {
  const targetRow = Math.floor((num - 1) / w);
  const isEvenRow = targetRow % 2 === 0;
  const targetCol = isEvenRow ? (num - 1) % w : w - 1 - ((num - 1) % w);

  let count = 1;

  for (let row = targetRow + 1; row * w < n + w; row++) {
    const start = row * w + 1;
    const end = Math.min(n, start + w - 1);

    const isEven = row % 2 === 0;
    const colIndex = isEven ? targetCol : w - 1 - targetCol;
    const boxNumber = start + colIndex;

    if (boxNumber <= end) count++;
  }

  return count;
}
