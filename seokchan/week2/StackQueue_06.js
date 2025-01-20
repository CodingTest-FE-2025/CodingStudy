// 주식 가격

/*
초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 
가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.
*/
/*
이중 for문을 사용
  첫 번째 for문 = 기준이 되는 가겨을 정함
  두 번째 for문 = 기준 가격과 비교
time 가격이 떨어지지 않으면 ++
if문으로 가격이 떨어지면 break
두 번째 for문이 다 돌거나 break가 되면 answer에 time push
*/

function solution(prices) {
  var answer = [];
  for (let i = 0; i < prices.length; i++) {
    let time = 0;
    for (let j = i + 1; j < prices.length; j++) {
      time++;
      if (prices[j] < prices[i]) {
        break;
      }
    }
    answer.push(time);
  }
  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
