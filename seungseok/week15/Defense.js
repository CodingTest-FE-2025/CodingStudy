// https://school.programmers.co.kr/learn/courses/30/lessons/142085

/**
 * 무적권은 적 수가 맣은 라운드에 쓰는게 유리
 * 지금까지 나온 수 중에 가장 큰 수 k개를 무적권으로 처리
 * 병사로 처리할 적만 누적합 계산해보고, 병사 수 n을 넘으면 종료.
 *
 */

// 시간초과
function solution(n, k, enemy) {
  const used = []; // 지금까지 나온 라운드에서 무적권 쓴 적들 저장

  for (let i = 0; i < enemy.length; i++) {
    used.push(enemy[i]); // 일단 적을 저장
    used.sort((a, b) => b - a); // 큰 순서대로 정렬

    // 무적권보다 많이 썼으면, 가장 적은 애부터 병사로 막기
    if (used.length > k) {
      const needSoldier = used.pop(); // 제일 작은 애를 병사로 막음
      n -= needSoldier;
    }

    if (n < 0) return i; // 병사 부족하면 종료
  }

  return enemy.length;
}

// 개선된 코드 (이진 탐색)
/**
 *
 * enemy 배열 = 매 라운드마다 적이 몇 명 나오는지
 * 병사 n명 = 병사 숫자가 줄어들면 게임 종료
 * 무적권 k개 = 적을 0명 소모로 막는 슈퍼 스킬
 *
 * 목표: "몇 라운드까지 막을 수 있을까?" → 그 최대 라운드를 구하는 것!
 *
 * 이진탐색: 어떤 값을 찾을 때, 하나씩 찾는 게 아니라 반으로 쪼개서 빠르게 줄여가는 방법
 *
 *
 */

function solution(n, k, enemy) {
  // 1. 막을 수 있는 라운드의 최소값(left)과 최대값(right)을 정한다.
  let left = 0;
  let right = enemy.length; // 모든 라운드를 다 막을 수도 있으니까

  // 2. 이진 탐색 시작: left가 right보다 커질 때까지 반복
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // mid = 현재 우리가 테스트할 라운드 수 (몇 라운드까지 막을 수 있는지 확인하는 중)

    // 3. enemy 배열에서 0번째부터 mid-1번째까지 자른다 (0 ~ mid-1 라운드)
    const cur = enemy.slice(0, mid).sort((a, b) => b - a);
    // 그 라운드를 적이 많은 순으로 정렬 (무적권은 큰 적에 써야 이득이니까)

    // 4. 가장 큰 적 k개는 무적권으로 막고, 나머지를 병사로 막아야 하므로
    //    k번째 이후의 적 수만 더해서 병사가 감당해야 할 총 수를 구함
    const sum = cur.slice(k).reduce((acc, val) => acc + val, 0);

    // 5. 병사로 감당 가능한 경우 → 더 많은 라운드도 가능할지 확인 (left를 늘림)
    if (sum <= n) {
      left = mid + 1;
    } else {
      // 6. 병사로 못 막으면 → 라운드 수 줄여야 함 (right를 줄임)
      right = mid - 1;
    }
  }

  // 7. 탐색이 끝나고 right가 막을 수 있는 최대 라운드 수를 갖게 됨
  return right;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3])); // 5
