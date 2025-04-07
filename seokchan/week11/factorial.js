// 반복문 전에 factor를 정의해놈 (반복하며 factor에 값을 계속 추가)
// factor가 n보다 작거나 같을 경우 계속 answer의 답을 i로 바꿔줌.

function solution(n) {
  let answer = 0;
  let factor = 1;
  for (let i = 1; i <= n; i++) {
    factor *= i;
    if (factor <= n) answer = i;
  }
  return answer;
}

console.log(solution(3628800));
console.log(solution(7));
