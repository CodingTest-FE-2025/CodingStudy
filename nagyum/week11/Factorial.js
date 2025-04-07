function solution(n) {
  let k = 1;
  let factorial = 1;

  while (factorial <= n) {
    k++;
    factorial *= k;
  }

  return k - 1;
}
