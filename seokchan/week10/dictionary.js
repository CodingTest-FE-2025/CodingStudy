function solution(word) {
  const vowel = ["A", "E", "I", "O", "U"];
  const order = [];

  function dfs(current) {
    if (current.length > 5) return;
    if (current.length > 0) {
      order.push(current);
    }
    for (const f of vowel) {
      dfs(current + f);
    }
  }
  dfs("");
  return (answer = order.indexOf(word) + 1);
}

console.log(solution("AAAAE")); // 6
console.log(solution("AAAE")); // 10
console.log(solution("I")); // 1563
console.log(solution("EIO")); // 1189
