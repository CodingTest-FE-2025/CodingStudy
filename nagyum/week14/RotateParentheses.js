/**괄호 회전하기
 *
 */

function solution(s) {
  let answer = 0;

  const isValid = (str) => {
    const stack = [];
    for (const char of str) {
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else {
        const last = stack.pop();
        if (
          (char === ")" && last !== "(") ||
          (char === "}" && last !== "{") ||
          (char === "]" && last !== "[")
        ) {
          return false;
        }
      }
    }
    return stack.length === 0;
  };

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) {
      answer++;
    }
  }

  return answer;
}
