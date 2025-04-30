/*
while문으로 1이 될때까지 반복
after = s에서 0을 제거
s길이와 after길이를 뺀 값이 0을 제거한 개수라서 이 값을 zeroRemove에 더해줌
남은 1의 개수를 2진수 문자열로 변환하여 s에 넣고 count를 더해줘서 몇번 반복되고 있는지 체크
*/

function solution(s) {
  let answer = [];
  let count = 0;
  let zeroRemove = 0;

  while (s !== "1") {
    let after = s
      .split("")
      .filter((char) => char === "1")
      .join("");
    zeroRemove += s.length - after.length;
    s = after.length.toString(2);
    count++;
  }

  answer = [count, zeroRemove];
  return answer;
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
