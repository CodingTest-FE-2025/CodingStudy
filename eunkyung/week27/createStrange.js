function solution(s) {
  let count = 0;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += s[i];
      count = 0;
    } else {
      count % 2 === 0
        ? (result += s[i].toUpperCase())
        : (result += s[i].toLowerCase());
      count++;
    }
  }
  return result;
}
