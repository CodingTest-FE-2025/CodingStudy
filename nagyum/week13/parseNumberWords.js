/** 짝지어 제거하기
 * 붙어있는 짝지은 문자열을 제거하고 이어붙힘
 * 완전히 제거가 가능하면 1 안되면 0
 * sort 쓰면 문자열이 정렬되니까 맨앞부터 두개씩 비교해서 같으면 제거
 * 끝까지 제거하고 남아있는게 있으면 안되는거잖아
 * 일단 무조건 길이가 홀수면 안되는거
 * sor는 배열에서 되는거고 얘는 문자열이라서 안됨
 */

function solution(s) {
  if (s.length === 0) return 1;

  if (s.length % 2 === 1) return 0;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
