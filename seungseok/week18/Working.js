// https://school.programmers.co.kr/learn/courses/30/lessons/388351

function solution(schedules, timelogs, startday) {
  let count = 0; // 상품 받을 사람 수

  // 평일(월~금) 인덱스 구하기 (0~6 기준으로)
  const weekdays = [];
  for (let i = 0; i < 7; i++) {
    const day = (startday - 1 + i) % 7;
    if (day < 5) weekdays.push(i); // 월~금만
  }

  for (let i = 0; i < schedules.length; i++) {
    const limitHour = Math.floor(schedules[i] / 100); // 희망 시각 시
    const limitMin = schedules[i] % 100; // 희망 시각 분
    let limitTime = limitHour * 60 + limitMin + 10; // 분 단위로 +10분

    let ok = true;

    for (let d of weekdays) {
      const log = timelogs[i][d];
      const h = Math.floor(log / 100);
      const m = log % 100;
      const time = h * 60 + m;

      if (time > limitTime) {
        ok = false;
        break;
      }
    }

    if (ok) count++;
  }

  return count;
}

// 1. 출근 인정 시각은 희망 시각 + 10분이다.
// 2. 모든 직원에 대해 평일(월~금) 만 확인하면 된다.
// 3. 이벤트 시작 요일이 언제인지에 따라 이번 주의 평일 인덱스를 구한다.
// 4. 직원마다 평일 출근 시간이 인정 시각 이하인지 확인한다.
// 5. 지각 없이 5일 연속으로 인정 시각 이내에 출근한 직원 수를 센다.
