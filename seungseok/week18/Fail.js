// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(n, stages) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    // i번 스테이지에 멈춘 사람 수
    const fail = stages.filter((s) => s === i).length;

    // i번 이상 스테이지에 도달한 사람 수
    const reach = stages.filter((s) => s >= i).length;

    const rate = reach === 0 ? 0 : fail / reach;

    result.push([i, rate]); // [스테이지 번호, 실패율]
  }

  // 실패율 기준 정렬, 같으면 번호 오름차순
  result.sort((a, b) => b[1] - a[1] || a[0] - b[0]);

  // 스테이지 번호만 추출
  return result.map((r) => r[0]);
}
