function solution(x, y, n) {
  const visited = new Set();
  const queue = [[x, 0]];

  while (queue.length) {
    const [cur, count] = queue.shift();

    if (cur === y) return count;
    if (cur > y || visited.has(cur)) continue;

    visited.add(cur);

    queue.push([cur + n, count + 1]);
    queue.push([cur * 2, count + 1]);
    queue.push([cur * 3, count + 1]);
  }

  return -1;
}
