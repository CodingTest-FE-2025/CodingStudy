function solution(s) {
  let answer = false;
  if (s.length === 4 || s.length === 6) {
    answer = /^[0-9]+$/.test(s);
  }
  return answer;
}

console.log(solution("a234"));
console.log(solution("1234"));
console.log(solution("12345"));
