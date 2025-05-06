function solution(x, y, n) {
  //BFS (너비 우선 탐색)
  //가장 먼저 y에 도달하는 경우가 최소 연산 횟수

  const visited = new Set(); //중복 방지
  const queue = [[x, 0]]; // [현재값, 연산 횟수]

  while (queue.length > 0) {
    const [current, count] = queue.shift(); // 탐색할 노드 꺼내기

    if (current === y) return count; //y에 도착하면 count 리턴
    if (current > y || visited.has(current)) continue;
    //값이 y보다 커지면 탐색할 필요가 없음

    visited.add(current);

    queue.push([current + n, count + 1]);
    queue.push([current * 2, count + 1]);
    queue.push([current * 3, count + 1]);
  }

  return -1;
}
