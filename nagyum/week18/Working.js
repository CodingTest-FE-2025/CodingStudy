function solution(schedules, timelogs, startday) {
  let answer = 0;

  // 시간 변환 함수: HHMM → 분
  const toMinutes = (time) => {
    const hour = Math.floor(time / 100);
    const minute = time % 100;
    return hour * 60 + minute;
  };

  for (let i = 0; i < schedules.length; i++) {
    const targetTime = toMinutes(schedules[i]) + 10;
    let isValid = true;

    for (let j = 0; j < 7; j++) {
      const day = ((startday + j - 1) % 7) + 1;
      if (day === 6 || day === 7) continue; // 주말 제외

      const logTime = toMinutes(timelogs[i][j]);
      if (logTime > targetTime) {
        isValid = false;
        break;
      }
    }

    if (isValid) answer++;
  }

  return answer;
}
