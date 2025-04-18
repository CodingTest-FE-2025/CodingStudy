// 기능 개발

/* 
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
*/

/*
days = map으로 남은 날짜 계산 (소수점으로 떨어질 경우 Math.ceil을 통해 올림)
for of로 순회하며 maxDay보다 작거나 같은 작업은 같이 배포 (count++)
*/

function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((progress, index) => {
    return Math.ceil((100 - progress) / speeds[index]);
  });

  let maxDay = days[0];
  let count = 0;

  for (let day of days) {
    if (day <= maxDay) {
      count++;
    } else {
      answer.push(count);
      maxDay = day;
      count = 1;
    }
  }
  answer.push(count);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 90], [1, 1, 1, 1, 1, 1]));
