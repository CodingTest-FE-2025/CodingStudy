function solution(num) {
  let answer = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    answer++;
    if (answer === 500) {
      answer = -1;
      break;
    }
  }
  return answer;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
