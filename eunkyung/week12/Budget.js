function solution(d, budget) {
  let count = 0;
  d.sort((a, b) => a - b);
  d.forEach((value) => {
    if (budget - value >= 0) {
      count++;
      budget = budget - value;
    } else {
      return count;
    }
  });
  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9)); //3
