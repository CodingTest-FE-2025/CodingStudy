/*
기능 개발

뒤의 기능이 앞 기능보다 먼저 개발이 되도
앞 기능이 배포될때까지 기다려야됨
각 배포마다 몇개의 기능이 배포되는지

sol. 
작업이 완성되기까지 걸리는 시간
배열에서 뒤에 작업이 먼저 개발이 되면, stack/push를 하고
같이 pop 되야됨

*/

function solution(progresses, speeds) {
  var answer = [];
  let time = 0;
  let count = 0;

  while (progresses.length > 0) {
    if (progresses[0] + time * speeds[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count += 1;
    } else {
      if (count > 0) {
        answer.push(count);
        count = 0;
      }
      time += 1;
    }
  }
  if (count > 0) {
    answer.push(count);
  }

  return answer;
}
