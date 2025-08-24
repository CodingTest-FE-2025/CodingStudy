const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const targets = input[1].split(" ").map(Number);

let deque = Array.from({ length: N }, (_, i) => i + 1);
let count = 0;

for (const target of targets) {
  const idx = deque.indexOf(target);

  if (idx === 0) {
    deque.shift();
    continue;
  }

  if (idx <= Math.floor(deque.length / 2)) {
    for (let i = 0; i < idx; i++) {
      deque.push(deque.shift());
      count++;
    }
  } else {
    for (let i = 0; i < deque.length - idx; i++) {
      deque.unshift(deque.pop());
      count++;
    }
  }

  deque.shift();
}

console.log(count);
