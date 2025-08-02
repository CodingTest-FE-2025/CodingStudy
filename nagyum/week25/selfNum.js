function d(n) {
  let sum = n;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

const selfNumbers = Array(10001).fill(true);

for (let i = 1; i <= 10000; i++) {
  const dn = d(i);
  if (dn <= 10000) {
    selfNumbers[dn] = false;
  }
}

for (let i = 1; i <= 10000; i++) {
  if (selfNumbers[i]) {
    console.log(i);
  }
}
