function solution(n, k, enemy) {
  let left = 0;
  let right = enemy.length;
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const selected = enemy.slice(0, mid).sort((a, b) => b - a);

    let total = 0;
    for (let i = k; i < selected.length; i++) {
      total += selected[i];
    }

    if (total <= n) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}
