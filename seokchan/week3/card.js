/*
Array.from을 통해서 1~N까지의 배열 생성
while문으로 shift, push(shift)를 카드가 한장 남을때까지 반복
*/

const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = parseInt(input, 10);
const queue = Array.from({ length: N }, (v, i) => i + 1);

while (queue.length > 1) {
  queue.shift();
  queue.push(queue.shift());
}

console.log(queue[0]);
