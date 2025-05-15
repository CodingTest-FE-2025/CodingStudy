function solution(numbers, k) {
  let answer = numbers[((k - 1) * 2) % numbers.length];
  return answer;
}

console.log(solution([1, 2, 3, 4], 2));
console.log(solution([1, 2, 3, 4, 5, 6], 5));
console.log(solution([1, 2, 3], 3));
