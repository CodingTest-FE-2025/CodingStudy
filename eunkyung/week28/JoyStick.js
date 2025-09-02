function solution(name) {
  let answer = 0;
  const len = name.length;

  for (let i = 0; i < len; i++) {
    const charCode = name.charCodeAt(i);
    const diff = charCode - 65; // 'A' = 65
    answer += Math.min(diff, 26 - diff);
  }

  let move = len - 1;
  for (let i = 0; i < len; i++) {
    let next = i + 1;
    while (next < len && name[next] === "A") {
      next++;
    }

    move = Math.min(move, i * 2 + (len - next), i + (len - next) * 2);
  }

  return answer + move;
}
