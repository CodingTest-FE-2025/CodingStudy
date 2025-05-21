function solution(n) {
  let answer = "";
  if (n % 2 === 0) {
    answer = "수박".repeat(n / 2);
  } else {
    answer = "수박".repeat(Math.ceil(n / 2)).slice(0, n);
  }
  return answer;
}
