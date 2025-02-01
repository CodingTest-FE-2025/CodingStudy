const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./week3/flipWord.txt"
  )
  .toString()
  .trim();

let count = 0;
let inputList = [];
for (f in input) {
  //태그와 단어 사이에 공백을 넣어 태그와 단어를 분리함
  if (input[f] === "<") {
    inputList.push(" ");
    inputList.push(input[f]);
    count++;
  } else if (input[f] === ">") {
    inputList.push(input[f]);
    inputList.push(" ");
    count--;
  } else if (count > 0 && input[f] === " ") {
    //태그 안에 공백은 '@'로 대체하여 기존 공백과 구별
    inputList.push("@");
  } else {
    inputList.push(input[f]);
  }
}

let list = inputList.join("").split(" ");
let result = [];
//태그와 단어를 각 요소로 하는 새로운 배열 생성
for (i in list) {
  if (list[i][0] === "<") {
    result.push(list[i].replaceAll("@", " "));
  } else {
    result.push(list[i].split("").reverse().join(""));
  }
}
let filtered = result.filter((ele) => ele !== "");

let output = [];
//태그와 단어 사이에 공백 제거
for (let i = 0; i < filtered.length - 1; i++) {
  if (filtered[i][0] !== "<" && filtered[i + 1][0] !== "<") {
    output.push(filtered[i]);
    output.push(" ");
  } else {
    output.push(filtered[i]);
  }
}
output.push(filtered[filtered.length - 1]);

console.log(output.join(""));
