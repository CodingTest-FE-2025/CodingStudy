function solution(schedules, timelogs, startday) {
  const n = schedules.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    const hopeTime = schedules[i];
    const deadline = addMinutes(hopeTime, 10);

    for (let d = 0; d < 7; d++) {
      const dayOfWeek = (startday + d) % 7;
      if (dayOfWeek === 0 || dayOfWeek === 6) continue;

      const actualTime = timelogs[i][d];
      if (actualTime < 0 || actualTime > deadline) {
        count++;
        break;
      }
    }
  }

  return n - count;
}

function addMinutes(time, minutesToAdd) {
  const hour = Math.floor(time / 100);
  const minute = time % 100;
  let newMinute = minute + minutesToAdd;
  let newHour = hour + Math.floor(newMinute / 60);
  newMinute = newMinute % 60;
  return newHour * 100 + newMinute;
}
