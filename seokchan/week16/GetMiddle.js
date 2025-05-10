function solution(s) {
  let answer = "";
  if (s.length % 2 === 0) {
    answer = s.slice(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    answer = s.slice(Math.floor(s.length / 2), Math.ceil(s.length / 2));
  }
  return answer;
}

console.log(solution("abcde"));
console.log(solution("qwer"));
