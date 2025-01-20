/*
 주식 가격
 배열을 돌면서 자기 보다 작은 값이 있는 인덱스 값에서 본인 인덱스 값을 빼면 그게 시간일듯,,?
sol. 이중루프
-> 시간 복잡도 넘 큼
sol. 스택
=>
 */

function solution(prices) {
  let answer = Array(prices.length).fill(0);
  let stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
      let index = stack.pop();
      answer[index] = i - index;
    }
    stack.push(i);
  }

  while (stack.length) {
    let index = stack.pop();
    answer[index] = prices.length - 1 - index;
  }

  return answer;
}
