// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let answer = 0; // 결과값을 저장할 변수

  // DFS 함수 정의
  function dfs(idx, currentSum) {
    // 모든 숫자를 다 사용한 경우
    if (idx === numbers.length) {
      if (currentSum === target) {
        answer++; // target과 일치하면 answer 증가
      }
      return;
    }

    // 현재 숫자에 대해 + 연산 적용
    dfs(idx + 1, currentSum + numbers[idx]);
    // 현재 숫자에 대해 - 연산 적용
    dfs(idx + 1, currentSum - numbers[idx]);
  }

  // DFS 시작
  dfs(0, 0);
  return answer;
}

// 예시 테스트
console.log(solution([1, 1, 1, 1, 1], 3)); // 출력: 5

/*
function solution(numbers, target) {
  let answer = 0;
  // 시작점: 인덱스 0과 누적 합 0을 가진 객체
  let queue = [{ idx: 0, sum: 0 }];

  // 큐가 빌 때까지 반복
  while (queue.length > 0) {
    let { idx, sum } = queue.shift(); // 큐에서 하나씩 꺼냄

    // 모든 숫자를 사용한 경우
    if (idx === numbers.length) {
      if (sum === target) {
        answer++;
      }
    } else {
      // 현재 숫자에 대해 + 연산 적용한 결과를 큐에 추가
      queue.push({ idx: idx + 1, sum: sum + numbers[idx] });
      // 현재 숫자에 대해 - 연산 적용한 결과를 큐에 추가
      queue.push({ idx: idx + 1, sum: sum - numbers[idx] });
    }
  }

  return answer;
}

// 예시 테스트
console.log(solution([1, 1, 1, 1, 1], 3)); // 출력: 5
*/
