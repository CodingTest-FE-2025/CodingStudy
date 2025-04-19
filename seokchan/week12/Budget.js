function solution(d, budget) {
  let answer = 0;
  let sort = d.sort((a, b) => a - b);
  for (let i = 0; i < sort.length; i++) {
    budget -= sort[i];
    if (budget < 0) {
      break;
    }
    answer++;
  }
  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
