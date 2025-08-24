function d(n) {
  return (
    n +
    n
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0)
  );
}

const LIMIT = 10000;
const generated = new Array(LIMIT + 1).fill(false);

for (let i = 1; i <= LIMIT; i++) {
  const dn = d(i);
  if (dn <= LIMIT) {
    generated[dn] = true;
  }
}

for (let i = 1; i <= LIMIT; i++) {
  if (!generated[i]) {
    console.log(i);
  }
}
