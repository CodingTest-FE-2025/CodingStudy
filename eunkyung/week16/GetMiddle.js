function solution(s) {
  const rest = s.length % 2;

  if (rest === 1) {
    return s[Math.floor(s.length / 2)];
  } else {
    return s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)];
  }
}

console.log(solution("qwer"));
