function solution(s) {
  var answer = [...s].sort().reverse().join("");
  return answer;
}

console.log(solution("Zbcdefg"));
