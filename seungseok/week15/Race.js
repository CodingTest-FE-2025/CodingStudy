// https://school.programmers.co.kr/learn/courses/30/lessons/178871

/**
 * 생각한 방법
 * 1. callings을 for of문
 * 2. players에서 el의 위치를 찾고 제거
 * 3. players에서 찾은 위치에 -1에 el 추가
 */

function solution(players, callings) {
  for (const el of callings) {
    const idx = players.indexOf(el);
    players.splice(idx, 1);
    players.splice(idx - 1, 0, el);
  }

  return players;
}

// 시간 초과

// rank = { mumu: 0, soe: 1, poe: 2 }
// "soe" 현재 위치 = 1, 앞 사람은 "mumu"
// 자리만 바꿈 → ["soe", "mumu", "poe"]
// rank도 함께 업데이트 → rank = { soe: 0, mumu: 1, poe: 2 }

function solution(players, callings) {
  const rank = {}; // 이름 → 인덱스
  players.forEach((name, i) => (rank[name] = i));

  for (const el of callings) {
    const idx = rank[el];
    const front = players[idx - 1];

    // 배열에서 자리 바꿈
    players[idx - 1] = el;
    players[idx] = front;

    // 맵도 같이 갱신
    rank[el]--;
    rank[front]++;
  }

  return players;
}

console.log(solution(["mumu", "soe", "poe"], ["soe"]));
