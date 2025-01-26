const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./week3/zero.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

//첫번째 숫자는 입력받을 숫자의 갯수임으로 제거
input.shift();
let list = [];
let sum = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === 0) {
    //input 배열을 돌면서 0이라면 새 배열의 요소 제거
    list.pop();
  } else {
    //아니라면 새 배열에 요소 추가
    list.push(input[i]);
  }
}
//이후 배열 요소들의 합 계산
list.forEach((num) => {
  sum += num;
});

console.log(sum);
