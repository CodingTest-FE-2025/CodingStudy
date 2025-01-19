function solution(s) {
  var answer = true;
  const list = [...s];
  let sum = 0;
  list.map((value) => {
    if (value === "(") {
      sum++;
    } else {
      sum--;
    }
    if (sum < 0) {
      answer = false;
      return;
    }
  });
  if (sum != 0) {
    answer = false;
  }

  return answer;
}

console.log(solution("()()")); //true;
