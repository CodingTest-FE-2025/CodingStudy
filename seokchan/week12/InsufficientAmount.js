function solution(price, money, count) {
  let answer = 0;
  let cost = 0;
  for (let i = 1; i <= count; i++) {
    cost += price * i;
  }
  if (cost > money) {
    answer = cost - money;
  } else {
    answer = 0;
  }
  return answer;
}

console.log(solution(3, 20, 4));
