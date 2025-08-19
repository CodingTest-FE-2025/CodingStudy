function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
