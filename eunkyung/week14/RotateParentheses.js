function solution(s) {
  let answer = 0;
  const mapping = { ")": "(", "]": "[", "}": "{" };

  for (let i = 0; i < s.length; i++) {
    let rotated = s.slice(i) + s.slice(0, i); // i만큼 왼쪽으로 회전
    let stack = [];

    let isValid = true;
    for (let b of rotated) {
      if (b === "(" || b === "[" || b === "{") {
        stack.push(b);
      } else {
        if (stack.length && stack[stack.length - 1] === mapping[b]) {
          stack.pop();
        } else {
          isValid = false;
          break;
        }
      }
    }

    if (isValid && stack.length === 0) answer++;
  }

  return answer;
}

console.log(solution("[](){}")); //3
