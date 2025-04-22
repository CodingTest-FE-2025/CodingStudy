// https://school.programmers.co.kr/learn/courses/30/lessons/12973

/**
 *
 * 스택사용
 * stack에 넣고
 * stack의 마지막과 현재 문자가 같으면 pop
 * 그렇지 않으면 push
 * stack의 길이가 0이면 1리턴 아니면 0리턴
 *
 */

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    if (stack[stack.length - 1] === el) {
      stack.pop();
    } else {
      stack.push(el);
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa")); // 1
