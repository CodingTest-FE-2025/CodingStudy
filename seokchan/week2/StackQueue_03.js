// 올바른 괄호

/* 
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어
"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
*/

/*
for of문으로 's'의 각 문자를 순회
'(' 여는 괄호의 경우 스택에 push
')' 닫는 괄호의 경우 스택이 비어있는지 확인. 비어있으면 false 비어있지 않다면 pop하여 여는 괄호 삭제.
반복을 끝냈을때 모든 괄호가 다 삭제되어 스택의 length가 0인 경우 true
*/

function solution(s) {
  var answer = true;
  let stack = [];

  for (let i of s) {
    if (i === "(") {
      stack.push(i);
    } else if (i === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  answer = stack.length === 0;
  return answer;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
