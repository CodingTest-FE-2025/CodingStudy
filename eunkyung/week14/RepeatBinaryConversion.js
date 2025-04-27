function solution(s) {
  var answer = [0, 0];

  while (s !== "1") {
    const result = removeZeros(s);
    const c = result.length;
    s = c.toString(2);
    answer[0]++;
  }

  function removeZeros(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== "0") {
        result += str[i];
      } else {
        answer[1]++;
      }
    }
    return result;
  }

  return answer;
}

console.log(solution("110010101001")); //[3,8]
