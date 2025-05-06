function solution(x, y, n) {
  const visited = new Set();
  const queue = [[x, 0]];

  while (queue.length > 0) {
    const [current, count] = queue.shift();
    if (current === y) return count;
    if (current > y || visited.has(current)) continue;

    visited.add(current);

    queue.push([current + n, count + 1]);
    queue.push([current * 2, count + 1]);
    queue.push([current * 3, count + 1]);
  }

  return -1;
}
