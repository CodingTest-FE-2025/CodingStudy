function solution(begin, target, words) {
  // visited 객체는 각 단어까지 도달하는 데 필요한 변환 단계(거리)를 저장
  // 시작 단어인 begin은 아무 변환 없이 0단계로 시작
  const visited = { [begin]: 0 };

  // BFS 탐색을 위한 큐를 초기화합니다. 시작 단어부터 탐색을 시작
  const queue = [begin];

  // 큐에 요소가 남아있는 동안 반복
  while (queue.length) {
    // 큐의 맨 앞 단어를 꺼내 현재 단어(cur)로 설정
    const cur = queue.shift();

    // 만약 현재 단어가 목표 단어(target)와 같다면 탐색을 종료
    if (cur === target) break;

    // words 배열에 있는 각 단어에 대해 반복
    for (const word of words) {
      // isConnected 함수로 cur와 word가 오직 한 글자만 다른지 확인
      // 그리고 아직 visited에 등록되지 않은 경우에만 진행
      if (isConnected(word, cur) && !visited[word]) {
        // 현재 단어까지의 단계(visited[cur])에 1을 더한 값을 word의 단계로 저장
        visited[word] = visited[cur] + 1;
        // 단어를 큐에 추가하여 이후 탐색 대상으로 생성
        queue.push(word);
      }
    }
  }

  // 만약 target 단어가 visited 객체에 존재하면, 그 값(최소 변환 단계)을 반환하고,
  // 존재하지 않으면 변환이 불가능한 것이므로 0을 반환
  return visited[target] ? visited[target] : 0;
}

// 헬퍼 함수 isConnected: 두 단어가 오직 한 글자만 다른지 확인하는 함수
const isConnected = (str1, str2) => {
  let count = 0; // 서로 다른 문자의 개수를 세는 변수
  const len = str1.length; // 두 단어의 길이는 동일하다고 가정

  // 각 인덱스별로 두 문자열의 문자를 비교
  for (let i = 0; i < len; i++) {
    if (str1[i] !== str2[i]) {
      count++; // 문자가 다르면 count를 증가
    }
  }

  // 서로 다른 문자의 수가 정확히 1개이면 true, 아니면 false를 반환
  return count === 1 ? true : false;
};
