function solution(n, words) {
  let result = [0, 0];

  for (let idx = 1; idx < words.length; idx++) {
    const prev = words[idx - 1];
    const curr = words[idx];

    if (
      curr.length <= 1 ||
      words.indexOf(curr) < idx ||
      curr[0] !== prev[prev.length - 1]
    ) {
      const person = (idx % n) + 1;
      const turn = Math.floor(idx / n) + 1;
      result = [person, turn];
      break;
    }
  }

  return result;
}
