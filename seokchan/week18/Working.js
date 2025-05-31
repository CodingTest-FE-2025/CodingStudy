/*
1. 첫 for문 = 사원마다 정해 놓은 시간 체크
2. 두번째 for문에서 정해 놓은 시간과 실제 출근 시간 비교
3. day 변수를 활용해서 1~7까지 요일마다 고정된 수치를 부여해줌 
4. if문으로 6,7 (토,일) 제외 시킴 (continue = 해당 반복을 건너뜀)
5. 시간 체크 
5-1. 1130 -> 이렇게 시간표기가 되어있는걸 hour,min 변수로 나눔
5-2. min에 여유시간 10분을 추가하고 60분이 넘어가면 60을 빼고 시간에 +1을 해줌
5-3. 시간과 분을 합쳐 데드라인 설정
6. 실 출근 시간이 데드라인 보다 작거나 같으면 safe++
7. safe가 5보다 크다면 해당 사원은 보상을 받을 수 있기때문에 answer ++
*/

function solution(schedules, timelogs, startday) {
  let answer = 0;

  for (let i = 0; i < schedules.length; i++) {
    let safe = 0;

    for (let j = 0; j < 7; j++) {
      let day = ((startday + j - 1) % 7) + 1;

      if (day === 6 || day === 7) continue;

      let hour = Math.floor(schedules[i] / 100);
      let min = (schedules[i] % 100) + 10;
      let deadline = 0;
      if (min >= 60) {
        min = min - 60;
        hour++;
      }
      deadline = hour * 100 + min;

      if (timelogs[i][j] <= deadline) {
        safe++;
      }
    }

    if (safe >= 5) {
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(
    [700, 800, 1100],
    [
      [710, 2359, 1050, 700, 650, 631, 659],
      [800, 801, 805, 800, 759, 810, 809],
      [1105, 1001, 1002, 600, 1059, 1001, 1100],
    ],
    5
  )
);
