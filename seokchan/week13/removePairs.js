/*
재귀 함수 풀이
for문을 통해 인접한 문자가 중복인 경우 slice로 잘라서 remove에 넣어줌
solution(remove)로 재귀함수 진행
결과로 s의 길이가 0인 경우 1을 리턴, s에 길이가 있는 경우 0을 리턴
ㄴ> 런타임 에러로 인해 풀이 실패 효율성 0점 처음봄..

스택 형식 풀이
function solution(s) {
  const stack = [];

  for (let char of s) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
*/

function solution(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      let remove = s.slice(0, i) + s.slice(i + 2);
      return solution(remove);
    }
  }
  return (answer = s.length === 0 ? 1 : 0);
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
