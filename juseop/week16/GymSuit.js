/**
 * 체육복
 * 학생들의 번호가 붙어있는 체육복이 있다.
 * 바로 앞 번호의 학생이 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있다.
 * 체육복이 없으면 수업을 못 듣는다. 최대한 많은 학생이 체육 수업을 들어야한다.
 * 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
 * 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수
 * 체육수업을 들을 수 있는 학생의 최댓값을 return
 *
 * 제한사항
 * 전체 학생의 수는 2명 이상  30명이하이다.
 * 체육복을 도난당한 학생의 수는 1명이상 n명 이하이고 중복없음.
 * 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있다.
 * 여벌 체육복을 가져온 학생이 체육복을 도난 당했을 수도 있다.
 * 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며,
 * 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없다.
 *
 * 입출력 예
 * n=5, lost=[2,4], reserve=[1,3,5], return=5
 * n=5, lost=[2,4], reserve=[3], return=4
 * n=3, lost=[3], reserve=[1], return=2
 */

function solution(n, lost, reserve) {
  // 여벌 체육복을 갖고 있으면서 도난당한 학생 제거
  let studentLost = lost
    .filter((x) => !reserve.includes(x))
    .sort((a, b) => a - b);
  let studentReserve = reserve
    .filter((y) => !lost.includes(y))
    .sort((a, b) => a - b);

  // 체육복을 갖고 있는 사람 수 = 전체 학생 수 - 잃어버린 사람 수
  let answer = n - studentLost.length;

  // 여벌 체육복을 앞뒤 학생에게 빌려줌
  for (let i = 0; i < studentLost.length; i++) {
    const lostStudent = studentLost[i];
    const lendIndex = studentReserve.findIndex(
      (r) => r === lostStudent - 1 || r === lostStudent + 1
    );
    if (lendIndex !== -1) {
      // 빌려줄 수 있는 경우
      studentReserve.splice(lendIndex, 1); // 해당 학생은 빌려줬으므로 제거
      answer += 1; // 체육복 입을 수 있는 사람 +1
    }
  }

  return answer;
}
