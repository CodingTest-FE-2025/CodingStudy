function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const free = Math.floor(n / a) * b;
    answer += free;
    n = Math.floor(n / a) * b + (n % a);
  }

  return answer;
}
