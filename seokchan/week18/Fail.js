/*
reached = 현재 [i]스테이지에 도달한 사람
current = 현재 [i]스테이지에 머물고 있는 사람
failRate = 실패율 계산 -> 도달한 사람이 없으면 실패율 0, 아니면 current / reached
각 스테이지와 실패율을 객체를 answer에 저장
answer를 실패율이 높은 순으로 정렬
정렬된 결과에서 스테이지 번호만 꺼내서 배열로 리턴함
*/

function solution(N, stages) {
  let answer = [];

  for (let i = 1; i <= N; i++) {
    let reached = stages.filter((stage) => stage >= i).length;
    let current = stages.filter((stage) => stage === i).length;

    let failRate = reached === 0 ? 0 : current / reached;
    answer.push({ stage: i, rate: failRate });
  }

  answer.sort((a, b) => b.rate - a.rate);
  return answer.map((obj) => obj.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
