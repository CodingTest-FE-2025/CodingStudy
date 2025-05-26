/**
 * 유연 근무제
 * 출근 희망 시각 +10분까지 어플로 출근해야한다.
 * 직원 n명이 설정한 출근 희망 시각을 담은 1차원 정수 배열 schedules, 직원들이 일주일 동안 출근한 시각을 담은 2차원 정수 배열 timelogs,
 * 이벤트를 시작한 요일을 의미하는 정수 startday가 매개변수로 주어질 때,
 * 이때 상품을 받을 직원의 수를 return.
 *
 * 제한사항
 * 1<= schedules의 길이 <= 1,000
 * schedules[i]는 i+1번째 직원이 설정한 출근 희망 시각을 의미한다.
 * 700<= schedules[i] <= 1,100
 * 1<= timelogs의 길이 = n <= 1,000
 * timelogs[i][j]는 i+1번째 직원이 j+1일에 출근한 시각을 의미한다.
 * 600 <= timelogs[i][j] <= 2359
 * 1 <= startday <= 7
 * 1은 월요일, 2는 화요일, 3은 수요일, 4는 목요일, 5는 금요일, 6은 토요일, 7은 일요일에 이벤트를 시작했음을 의미.
 * 출근 희망 시각과 실제로 출근한 시각을 100으로 나눈 나머지는 59이하이다.
 *
 * 입출력 예
 * schedules = [700, 800, 1100] timelogs = [[710, 2359, 1050, 700, 650, 631, 659], [800, 801, 805, 800, 759, 810, 809], [1105, 1001, 1002, 600, 1059, 1001, 1100]]
 * startday =5 result = 3
 */

function solution(schedules, timelogs, startday) {
  let answer = 0;
  function formatTime(time) {
    let newTime = Math.floor(time / 100) * 60 + (time % 100) + 10;
    return Math.floor(newTime / 60) * 100 + (newTime % 60);
  }
  for (let i = 0; i < schedules.length; i++) {
    let time = formatTime(schedules[i]);
    let goal = true;
    for (let j = 0; j < 7; j++) {
      let day = (startday + j) % 7;
      if (day === 6 || day === 0) continue;
      if (timelogs[i][j] > time) {
        goal = false;
        break;
      }
    }
    if (goal) answer++;
  }
  return answer;
}
