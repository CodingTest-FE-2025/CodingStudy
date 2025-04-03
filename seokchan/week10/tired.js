/**
 * 1. 초기 값을 설정해서 stack에 push 후 while문 시작
 * fatigue = k 현재 피로도
 * vistied = 방문 체크
 * count = 현재 던전을 몇회 돌았는지 체크
 *
 * 2. 처음엔 모든 던전에 갈 수 있으므로 각 던전을 선택한 경우를 스택에 넣음
 * 이걸 조건 만족하는 한 계속 반복
 * count에는 현재 몇개의 던전을 돌았는지 ++계속 해줌
 * 반복하면서 max의 값을 count가 가장 높은 값으로 계속 바꿔주면서 모든 경우의 수가 끝나면 결국 최대 탐험 횟수인 max를 return
 */

function solution(k, dungeons) {
  const stack = [];
  let max = 0;

  stack.push({
    fatigue: k,
    visited: Array(dungeons.length).fill(false),
    count: 0,
  });
  // 초기 상태값 stack = {fatigue: 80, visited: [false x 3], count: 0}

  while (stack.length) {
    const { fatigue, visited, count } = stack.pop();
    max = Math.max(max, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [min, cost] = dungeons[i];

      if (!visited[i] && fatigue >= min) {
        const newVisited = [...visited]; // ** 다른 경우의 수에서 visited가 변하지 않도록 newVisited로 복사해서 사용해야됨 **
        newVisited[i] = true;

        stack.push({
          fatigue: fatigue - cost,
          visited: newVisited,
          count: count + 1,
        });
      }
    }
  }

  return max;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); // 3
