/*
isValid함수
올바른 괄호 문자열인지 확인하는 함수
스택을 사용해서 열리는 활호를 push, 닫히는 괄호가 나오면 맞는지 확인함.

for문에서 문자열을 0칸 ~ n-1칸만큼 회전시키고 isValid함수를 호출해 올바른지 확인함
rotated = 문자열 회전, i번째부터 끝까지 자르고 다시 처음부터 i번째까지 잘라 붙여 회전함
올바른 괄호 문자열이 될 때마다 answer + 1
*/

function solution(s) {
  let answer = 0;
  const n = s.length;

  function isValid(str) {
    const stack = [];
    for (let char of str) {
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else {
        if (stack.length === 0) return false;
        const top = stack.pop();
        if (
          (char === ")" && top !== "(") ||
          (char === "]" && top !== "[") ||
          (char === "}" && top !== "{")
        ) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

  for (let i = 0; i < n; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));
