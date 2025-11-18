/**
 * 체육복
 * 여벌 체육복을 빌려준다.
 * 학생들의 번호는 체격순으로 매겨져 있어,, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있다.
 * 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있다. 체육복이 없으면 수업을 들을 수 없다.
 * 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육 수업을 들을 수 있는 학생의 수 return.
 *
 * 제한 사항
 * 전체 학생의 수는 2명 이상 30명 이하.
 * 체육복을 도난당한 학새의 수는 1명 이상 n명이하이고 중복되는 번호는 없다.
 * 여벌의 체육복을 가져온 학생의 수는 1명 이상n명 이하이고 중복되는 번호는 없다.
 * 여벌 체육복이 있는 학생만 다른학생에게 빌려줄 수 있다.
 * 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기 때문에 다른학생에게는 빌려줄 수 없다.
 *
 * 입출력 예
 * n = 5, lost = [2, 4], reserve = [1, 3, 5] return = 5
 * n = 5, lost = [2, 4], reserve = [3] return = 4
 * n = 3, lost [3], reserve = [1] return = 2
 *
 */

function solution(n, lost, reserve) {
  let studentLost = lost
    .filter((x) => !reserve.includes(x))
    .sort((a, b) => a - b);
  let studentReserve = reserve
    .filter((y) => !lost.includes(y))
    .sort((a, b) => a - b);
  let answer = n - studentLost.length;
  for (let i = 0; i < studentLost.length; i++) {
    const lostStudent = studentLost[i];
    const lendIndex = studentReserve.findIndex(
      (r) => r === lostStudent - 1 || r === lostStudent + 1
    );
    if (lendIndex !== -1) {
      studentReserve.splice(lendIndex, 1);
      answer += 1;
    }
  }
  return answer;
}
