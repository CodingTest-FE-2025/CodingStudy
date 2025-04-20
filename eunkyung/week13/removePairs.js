function solution(s) {
  let isPairs = true;

  while (s.length > 0 && isPairs) {
    isPairs = false;
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === s[i + 1]) {
        s = s.slice(0, i) + s.slice(i + 2);
        isPairs = true;
        break;
      }
    }
    if (!isPairs) {
      return 0;
    }
  }
  return 1;
}

console.log(solution("baabaa")); //1

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
