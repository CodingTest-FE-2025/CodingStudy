/*
배열의 첫 번째 = K 
for문을 사용할때 K를 제외하기 위해서 0이 아닌 1부터 시작
if문으로 0일 경우 stack.pop으로 이전 숫자를 제거
0이 아닐 경우 stack.push
이후 map으로 stack에 있는 숫자를 전부 더해줌
*/

const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const K = parseInt(input[0]);
const stack = [];

for (let i = 1; i <= K; i++) {
  const value = parseInt(input[i]);
  if (value === 0) {
    stack.pop();
  } else {
    stack.push(value);
  }
}
let sum = 0;
stack.map((value) => {
  sum += value;
});
console.log(sum);
