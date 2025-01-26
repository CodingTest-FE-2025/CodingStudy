/*
for of문으로 문자열 분해
if문을 통해서 태그 여부 검사
word에 임시 저장했다가 공백을 만나면 word의 저장된 문자열을 뒤집어서 result로 이동
for of문의 순회가 끝나고 word에 남아있는 문자열을 뒤집어서 result로 이동
*/

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

function reverseWords(input) {
  let result = "";
  let word = "";
  let inTag = false;

  for (let char of input) {
    if (char === "<") {
      if (word) {
        result += word.split("").reverse().join("");
        word = "";
      }
      inTag = true;
      result += char;
    } else if (char === ">") {
      inTag = false;
      result += char;
    } else if (inTag) {
      result += char;
    } else if (char === " ") {
      result += word.split("").reverse().join("") + " ";
      word = "";
    } else {
      word += char;
    }
  }

  if (word) {
    result += word.split("").reverse().join("");
  }

  return result;
}

console.log(reverseWords(input));
