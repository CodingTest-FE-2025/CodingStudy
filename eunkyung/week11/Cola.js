function solution(a, b, n) {
  let sum = 0;
  let nowCola = n;
  while (a <= nowCola) {
    const newCola = Math.floor(nowCola / a) * b;
    nowCola = Math.floor(nowCola % a) + newCola;
    sum = sum + newCola;
  }
  return sum;
}

console.log(solution(2, 1, 20)); //19
