/* 
올바른 괄호

문자열 s로 주어짐
(로 열었으면 )로 짝지어서 닫혀야지 true

sol. 
1. 시작이 ) 면 무조건 false
2. 시작이 ( 면  
    2-1. )을 만날 수 있나
    2-2. 끝이 (로 끝나나
*/
function solution(s) {
  const arr = []; // 괄호 집어넣을 스택

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      arr.push("(");
    } else if (s[i] === ")") {
      if ((arr.length = 0)) {
        return false;
      }
      arr.pop();
    }
  }

  return arr.length === 0;
}
