function solution(prices) {
  const result = [];
  for (let j = 0; j < prices.length; j++) {
    let count = 0;
    for (let i = j + 1; i < prices.length; i++) {
      count++;
      if (prices[j] > prices[i]) {
        break;
      }
    }
    result.push(count);
  }

  return result;
}
