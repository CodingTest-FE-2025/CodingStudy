/**
 * 피로도
 * XX게임에는 피로도 시스템(0이상의 정수로 표현)이 있으며, 일정 피로도를 사용해 던전탐색 가능.
 * 던전마다 필요한 최소 필요 피로도와 소모 피로도가 있다. 최소 필요 피로도는 해당 던전을 탐색하기 위해 최소한으로 가지고 있어야하는 피로도
 * 소모 피로도는 던전을 탐험한 후 소모되는 피로도이다.
 * 최소 필요도가 80, 소모 피로도가 20인 던전을 탐헌하기 위해서는 유저의 현재 남은 피로도가 80이상 이어야하며,
 * 던전을 탐험한 후에는 피로도가 20이 소모된다.
 * 이 게임에는 하루에 한 번씩 탐험할 수 있는 던전이 있으며, 최대한 많이 탐험하려 한다.
 * 유저의 현재 피로도 K와 각 던전별 최소 필요 피로도와 소모 피로도가 담김 배열 dungeons가 매개변수로 주어질 때,
 * 유저가 탐험할 수 있는 최대 던전의 개수를 return 해라.
 *
 * 입출력 예
 * k = 80, dungeons = [[80,20],[50,40],[30,10]] => return 3
 */

function solution(k, dungeons) {
  let anwser = 0;
  const visited = Array(dungeons.length).fill(false); // 방문 여부 초기화
  function dfs(hp, m) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && hp >= dungeons[i][0]) {
        // 방문하지 않았고, 최소 필요 피로도 충족
        visited[i] = true; // 방문 처리
        dfs(hp - dungeons[i][1], m + 1); // 피로도 감소
        visited[i] = false; // 방문 취소
      }
    }
    anwser = Math.max(anwser, m); // 최대 던전 개수 업데이트
  }
  dfs(k, 0); // 탐험 시작
  return anwser; // 최대 던전 개수 반환
}

// 1. visited 배열을 사용하여 각 던전의 방문 여부를 체크한다.
// 2. dfs 함수를 사용하여 hp >= dungeons[i][0]이면 탐험 가능 → dfs(hp - dungeons[i][1], m + 1) 실행.
// 3. 탐험 후 visited[i] = false로 방문 취소한다.
// 4. 탐험이 끝나면 최대 던전 개수를 업데이트한다.
