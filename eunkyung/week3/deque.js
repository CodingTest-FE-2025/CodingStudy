const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./week3/deque.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

input.shift();
let list = [];
let result = [];
for (let i = 0; i < input.length; i++) {
  switch (input[i][0]) {
    case 1:
      list.unshift(input[i][1]);
      break;
    case 2:
      list.push(input[i][1]);
      break;
    case 3:
      if (list.length > 0) {
        result.push(list[0]);
      } else {
        result.push(-1);
      }
      break;
    case 4:
      if (list[0] > 0) {
        result.push(list.pop());
      } else {
        result.push(-1);
      }
      break;
    case 5:
      result.push(list.length);
      break;
    case 6:
      if (list.length > 0) {
        result.push(0);
      } else {
        result.push(1);
      }
      break;
    case 7:
      if (list[0] > 0) {
        result.push(list[0]);
      } else {
        result.push(-1);
      }
      break;
    case 8:
      if (list[0] > 0) {
        result.push(list[list.length - 1]);
      } else {
        result.push(-1);
      }
      break;
    default:
      break;
  }
}
console.log(result.join("\n"));
