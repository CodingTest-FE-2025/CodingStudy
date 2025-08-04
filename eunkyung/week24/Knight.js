function solution(number, limit, power) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    const result = countDivisors(i);
    if (result > limit) {
      sum = sum + power;
    } else {
      sum = sum + result;
    }
  }
  return sum;
}

function countDivisors(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i === n / i) {
        count += 1;
      } else {
        count += 2;
      }
    }
  }
  return count;
}
