/** 회전하는 큐
 * 1. 첫번째 원소를 뽑아 냄
 * 2. 왼쪽으로 한칸 이동
 * 3. 오른쪽으로 한칸 이동
 *
 * 큐에 처음에 포함되어있는 수 N 이 주어지고, 뽑을려고 하는 원소의 위치ㄱ가 주어짐
 * 그 원소를 주어진 순서대로 뽑아 내는데 드는, 2,3 번 연산의 최솟값을 출력
 *
 */

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const first = input[0].split(" ").map(Number);
const num_list = input[1].split(" ").map(Number);

const n = first[0];
const m = first[1];

let queue = Array.from({ length: n }, (_, i) => i + 1);
let count = 0;

for (let i = 0; i < m; i++) {
  const num = num_list[i];
  const index = queue.indexOf(num);
  const half = Math.floor(queue.length / 2);

  if (index <= half) {
    for (let j = 0; j < index; j++) {
      queue.push(queue.shift());
      count++;
    }
  } else {
    for (let j = 0; j < queue.length - index; j++) {
      queue.unshift(queue.pop());
      count++;
    }
  }

  queue.shift();
}

console.log(count);
