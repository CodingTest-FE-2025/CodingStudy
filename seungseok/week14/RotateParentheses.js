// https://school.programmers.co.kr/learn/courses/30/lessons/76502

/**
 *
 * stack 사용해서 올바른 괄호인지 확인하는 함수 만들기
 * s의길이만큼 회전하면서 올바른 괄호가 몇개인지 세기
 *
 */

function solution(s) {
  var answer = 0;

  function check(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
      const c = str[i];
      if (c === "(" || c === "[" || c === "{") {
        stack.push(c);
      } else {
        const last = stack.pop();
        if (c === ")" && last !== "(") return false;
        if (c === "]" && last !== "[") return false;
        if (c === "}" && last !== "{") return false;
      }
    }

    return stack.length === 0;
  }

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (check(rotated)) {
      answer++;
    }
  }

  return answer;
}

function solution(s) {
  var answer = 0; // 결과를 저장할 변수 초기화

  function check(str) {
    // 문자열이 올바른 괄호 문자열인지 확인하는 함수
    const stack = []; // 괄호를 저장할 스택 생성

    for (let i = 0; i < str.length; i++) {
      // 문자열을 한 글자씩 순회
      const c = str[i]; // 현재 글자
      if (c === "(" || c === "[" || c === "{") {
        // 여는 괄호라면
        stack.push(c); // 스택에 추가
      } else {
        // 닫는 괄호라면
        const last = stack.pop(); // 스택에서 마지막 괄호를 꺼냄
        if (c === ")" && last !== "(") return false; // 짝이 맞지 않으면 false
        if (c === "]" && last !== "[") return false; // 짝이 맞지 않으면 false
        if (c === "}" && last !== "{") return false; // 짝이 맞지 않으면 false
      }
    }

    return stack.length === 0; // 스택이 비어 있으면 true, 남아있으면 false
  }

  for (let i = 0; i < s.length; i++) {
    // 문자열 길이만큼 회전하며 확인
    const rotated = s.slice(i) + s.slice(0, i); // 왼쪽으로 i칸 회전한 문자열 생성
    if (check(rotated)) {
      // 회전한 문자열이 올바른 괄호 문자열이면
      answer++; // 결과 값 증가
    }
  }

  return answer; // 최종 결과 반환
}

console.log(solution("[](){}")); // 3
