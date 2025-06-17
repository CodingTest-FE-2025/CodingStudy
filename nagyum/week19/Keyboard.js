function solution(keymap, targets) {
  const memo = {};

  keymap.forEach((key) =>
    key.split("").forEach((alphabet, i) => {
      memo[alphabet] =
        (memo[alphabet] || Infinity) < i + 1 ? memo[alphabet] : i + 1;
    })
  );

  return targets.map((target) => {
    const sum = target.split("").reduce((a, t) => (a += memo[t]), 0);
    return sum && sum < Infinity ? sum : -1;
  });
}
