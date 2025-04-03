// https://school.programmers.co.kr/learn/courses/30/lessons/86971

/**
 *
 * 푸는방법
 * 1. wires 배열에서 전선을 하나씩 끊어본다.
 * 2. 끊고 남은 전선들로 연결 정보를 다시 만든다 (그래프 만들기).
 * 3. 그래프를 BFS로 순회하면서 한쪽 송전탑 그룹에 몇 개의 송전탑이 있는지 센다.
 * 4. 전체 송전탑 개수에서 그걸 빼면 다른 쪽 그룹 개수도 알 수 있다.
 * 5. 두 그룹의 송전탑 개수 차이를 구한다.
 * 6. 위 과정을 반복하면서 차이의 최솟값을 계속 갱신한다.
 * 7. 마지막에 가장 작았던 차이값을 리턴한다.
 *
 */

function solution(n, wires) {
  let answer = n; // 최대값으로 초기화

  // 전선을 하나씩 끊어보기
  for (let i = 0; i < wires.length; i++) {
    // 하나의 전선을 제거한 새로운 배열 만들기
    let temp = wires.slice(0, i).concat(wires.slice(i + 1));

    // 그래프 초기화: 1번부터 n번까지 노드 존재
    let graph = Array.from({ length: n + 1 }, () => []);

    // 전선 정보로 그래프 연결
    for (let [a, b] of temp) {
      graph[a].push(b); // a와 b를 서로 연결
      graph[b].push(a);
    }

    // BFS로 한 쪽의 송전탑 개수 세기
    let visited = Array(n + 1).fill(false);
    let queue = [1]; // 1번부터 시작
    visited[1] = true;
    let count = 1;

    while (queue.length > 0) {
      let current = queue.shift();

      for (let next of graph[current]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
          count++;
        }
      }
    }

    // 다른 쪽은 전체 개수 - count
    let otherCount = n - count;
    let diff = Math.abs(count - otherCount);

    // 최소값 갱신
    if (diff < answer) {
      answer = diff;
    }
  }

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [7, 8],
    [7, 9],
  ])
);
