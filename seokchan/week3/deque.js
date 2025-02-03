const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const N = parseInt(input[0], 10);
const commands = input.slice(1);
const deque = [];
const result = [];

for (let i = 0; i < N; i++) {
  const [op, value] = commands[i];

  if (op === 1) deque.unshift(parseInt(value, 10));
  else if (op === 2) deque.push(parseInt(value, 10));
  else if (op === 3) result.push(deque.length ? deque.shift() : -1);
  else if (op === 4) result.push(deque.length ? deque.pop() : -1);
  else if (op === 5) result.push(deque.length);
  else if (op === 6) result.push(deque.length === 0 ? 1 : 0);
  else if (op === 7) result.push(deque.length ? deque[0] : -1);
  else if (op === 8) result.push(deque.length ? deque[deque.length - 1] : -1);
}

console.log(result.join("\n"));
