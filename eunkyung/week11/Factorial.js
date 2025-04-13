function solution(n) {
  let answer = 0;
  let sum = 1;
  for (let i = 2; i <= 10; i++) {
    sum = sum * i;
    console.log(sum);
    if (sum <= n) {
      if (i === 10) {
        return 10;
      }
    } else {
      return i - 1;
    }
  }
}

console.log(solution(3628800)); //10
// console.log(solution(7)); //3
