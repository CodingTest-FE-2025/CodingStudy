function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);
  const stack = []; // 인덱스 보관

  for (let i = 0; i < n; i++) {
    const cur = prices[i];
    while (stack.length && cur < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length) {
    const j = stack.pop();
    answer[j] = n - j - 1;
  }

  return answer;
}
