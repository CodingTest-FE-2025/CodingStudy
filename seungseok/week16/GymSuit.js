// https://school.programmers.co.kr/learn/courses/30/lessons/42862

/**
 *
 * 여벌+도난 학생은 제외 처리 (자기 거만 입음)
 * 도난 리스트, 여벌 리스트 정렬
 * 여벌 있는 학생이 앞뒤 번호에게 빌려줌
 * 최종적으로 체육복 없는 학생 수만큼 전체 인원에서 빼기
 *
 */

function solution(n, lost, reserve) {
  let realLost = lost.filter((l) => !reserve.includes(l));
  let realReserve = reserve.filter((r) => !lost.includes(r));

  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  for (let i = 0; i < realReserve.length; i++) {
    const lend = realReserve[i];

    const frontIdx = realLost.indexOf(lend - 1);
    const backIdx = realLost.indexOf(lend + 1);

    if (frontIdx !== -1) {
      realLost.splice(frontIdx, 1); // 앞 번호에게 빌려줌
    } else if (backIdx !== -1) {
      realLost.splice(backIdx, 1); // 뒷 번호에게 빌려줌
    }
  }

  return n - realLost.length;
}
