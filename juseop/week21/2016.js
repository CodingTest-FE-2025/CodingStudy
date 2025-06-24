/**
 * 2016년
 *
 * 2016년 1월 1일은 금요일이다.
 * 2016년 a월 b일은 무슨 요일일까요?
 * 두 수 a,b를 입력받아 2016년 a월 b일이 무슨 요일인지 return하는 함수.
 * 요일의 이름은 일요일 부터 토욜까지 각각 "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"로 return.
 *
 * 제한 조건
 * 2016년은 윤년이다.
 * 2016년 a월 b일은 실제로 있는 날이다.
 *
 * 입출력 예
 * a = 5, b = 24, return "TUE"
 */

function solution(a, b) {
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let totalDays = 0;
  for (let i = 0; i < a - 1; i++) {
    totalDays += monthDays[i];
  }
  return days[(totalDays + b - 1) % 7];
}
