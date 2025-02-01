/**
 * 단어 뒤집기
 *
 * < 로 시작하는 부분은 태그로 간주 하고 그대로 출력
 * 아닌 다른 단어들은 스택에 넣고 거꾸로 출력
 *
 * sol.
 * 입력을 <....> 랑 단어로 split 하고
 * 태그도 단어 취급을 해서 2차원 배열을 사용해 바로 answer 배열에 넣고
 * 태그로 시작하는게 아니라면 단어니까 stack에 넣어서 뒤집어서 answer 배열에 넣기
 *
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

// 태그와 단어를 구분하여 배열로 나누기
const parts = input.split(/(<[^>]*>)/); // 정규식으로 태그(<...>)와 나머지를 분리

const answer = [];

for (const part of parts) {
  if (part.startsWith("<") && part.endsWith(">")) {
    // 태그는 그대로 answer 배열에 추가
    answer.push(part);
  } else {
    // 단어를 공백 단위로 분리해서 각각 뒤집기
    const reversedWords = part
      .split(" ")
      .map((word) => word.split("").reverse().join("")) // 단어를 뒤집음
      .join(" "); // 다시 공백으로 연결
    answer.push(reversedWords);
  }
}

console.log(answer.join("")); // 배열을 문자열로 변환해서 출력
