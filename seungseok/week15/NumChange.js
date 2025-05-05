// https://school.programmers.co.kr/learn/courses/30/lessons/154538

/**
 *
 * 1. BFS 탐색을 위한 큐를 만든다. 처음엔 [x, 연산횟수 0]으로 시작
 * 2. 이미 확인한 숫자는 다시 계산하지 않기 위해 Set으로 저장
 * 3. 큐가 빌 때까지 반복
 * 4. 목표 숫자 y에 도달했으면 연산 횟수를 리턴
 * 5. y보다 크거나 이미 본 숫자는 건너뛴다
 * 6. 방문한 숫자 기록
 * 7. 가능한 연산 3가지: +n, *2, *3 을 큐에 추가 (연산 횟수는 +1)
 *
 */

// 기존 코드 (시간 초과)
function solution(x, y, n) {
  const visited = new Set();
  const queue = [[x, 0]]; // [현재값, 연산횟수]

  while (queue.length > 0) {
    const [cur, count] = queue.shift(); // 현재 숫자와 연산 횟수 꺼내기

    if (cur === y) return count;

    if (cur > y || visited.has(cur)) continue;
    visited.add(cur);

    queue.push([cur + n, count + 1]);
    queue.push([cur * 2, count + 1]);
    queue.push([cur * 3, count + 1]);
  }

  return -1;
}

// 개선된 코드
function solution(x, y, n) {
  const visited = Array(y + 1).fill(false); // 방문 배열
  const queue = [[x, 0]];
  let idx = 0; // shift() 대신 인덱스로 큐 탐색

  while (idx < queue.length) {
    const [cur, count] = queue[idx++];

    if (cur === y) return count;
    if (visited[cur]) continue;
    visited[cur] = true;

    // 다음 숫자가 y 이하여야 큐에 추가
    if (cur + n <= y) queue.push([cur + n, count + 1]);
    if (cur * 2 <= y) queue.push([cur * 2, count + 1]);
    if (cur * 3 <= y) queue.push([cur * 3, count + 1]);
  }

  return -1;
}

console.log(solution(2, 5, 4)); // 2
