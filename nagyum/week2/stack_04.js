/* 
프로세스

큐에서 프로세스 꺼내서 대기중인 프로세스와 비교 후 더 높은 프로세스가 있으면
다시 넣고 아님 실행

문제에서 주는 배열은
priroities : 우선순위 배열

sol. 
다른 배열 하나 만들어서 해당 prio.랑 맞도록 만들고 location을 

*/

function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({ priority, index }));
  let answer = 0;
  while (queue.length > 0) {
    const current = queue.shift();
    if (queue.some((task) => task.priority > current.priority)) {
      queue.push(current);
    } else {
      answer++;
      if (current.index === location) {
        return answer;
      }
    }
  }
}
