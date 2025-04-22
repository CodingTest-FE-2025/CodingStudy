function solution(n) {
  let answer = 0;

  while (n > 0) {
    //n을 3으로 나눈 나머지값이
    //n의 3진법의 반전순서로 나옴
    answer = answer * 3 + (n % 3);
    n = Math.floor(n / 3);
  }
  return answer;
}

console.log(solution(45)); //7
