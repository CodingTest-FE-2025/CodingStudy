function solution(prices) {
  var answer = [];

  for (let i = 0; i < prices.length - 1; i++) {
    let sum = 1;
    for (let j = i + 1; j < prices.length - 1; j++) {
      if (prices[i] <= prices[j]) {
        sum = sum + 1;
      } else {
        break;
      }
    }
    answer.push(sum);
  }
  answer.push(0);

  return answer;
}

console.log(solution([1, 2, 3, 2, 3])); //[4, 3, 1, 1, 0]
