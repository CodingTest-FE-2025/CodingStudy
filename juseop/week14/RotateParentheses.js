/**
 * 괄호 회전하기
 * 다음 규칙을 지키는 문자열을 올바른 괄호 문자열이다.
 * 1. (), [], {}는 올바른 괄호 문자열이다.
 * 2. A가 올바른 괄호 문자열이라면, (A), [A], {A}도 올바른 괄호 문자열이다.
 * 3. A와 B가 올바른 괄호 문자열이라면, AB도 올바른 괄호 문자열이다.
 * 4. 대괄호, 중괄호, 소괄호로 이루어진 문자열 S가 주어질 때,
 * S를 왼쪽으로 x칸만큼 회전시켰을 때 S가 올바른 괄호 문자열이 되게하는 x의 개수를 return
 *
 *
 * 입출력 예
 * s = "[](){}" => 3
 * s = "}]()[{" => 2
 * s = "[)(]" => 0
 * s = "}}}" => 0
 */
function solution(s) {
  let answer = 0;
  let stack = [];
  let isCorrect = true;

  if (s.length % 2 === 1) return 0; // 문자열 길이가 홀수면 올바른 괄호열이 될 수 없음

  for (let i = 0; i < s.length; i++) {
    let str = s.slice(i) + s.slice(0, i); // i만큼 왼쪽으로 회전한 문자열 만들기
    isCorrect = true;
    stack = []; // 스택 초기화
    for (let n of str) {
      if (n === "[" || n === "{" || n === "(") {
        stack.push(n); // 여는 괄호는 stack에 push
      } else {
        let opening = stack.pop(); // 닫는 괄호가 나오면 마지막 여는 괄호 꺼내서 비교
        if (opening === "(" && n === ")") continue;
        if (opening === "{" && n === "}") continue;
        if (opening === "[" && n === "]") continue;
        isCorrect = false; // 매칭이 안 되면 잘못된 괄호열
        break;
      }
    }
    if (isCorrect) answer++;
  }

  return answer;
}

//1. 각 회전마다 스택을 초기화
//2. 여는 괄호는 스택에 넣고, 닫는 괄호가 나오면 스택에서 꺼내서 비교
//3. 매칭이 안 되면 잘못된 괄호열로 판단하고 break
//4. 모든 괄호가 매칭되면 올바른 괄호열로 판단하고 answer를 1 증가시킴
