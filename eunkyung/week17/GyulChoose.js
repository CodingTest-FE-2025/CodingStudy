function solution(k, tangerine) {
  const sizeMap = new Map();

  for (let size of tangerine) {
    sizeMap.set(size, (sizeMap.get(size) || 0) + 1);
  }

  const counts = Array.from(sizeMap.values()).sort((a, b) => b - a);

  let total = 0;
  let kind = 0;

  for (let count of counts) {
    total += count;
    kind += 1;
    if (total >= k) break;
  }

  return kind;
}
