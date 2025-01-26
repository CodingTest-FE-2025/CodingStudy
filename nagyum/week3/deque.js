/** 덱 2
 * 덱 클래스 만들어서
 * 덱에서 사용할 수 있는 기본 기능 만드는 문제
 * construtor 사용해서
 * item: 배열 / head: 배열의 앞쪽 / tail: 배열의 뒷쪽
 *
 *
 */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Deque {
  constructor() {
    this.deque = [];
  }

  push_front(x) {
    this.deque.unshift(x);
  }

  push_back(x) {
    this.deque.push(x);
  }

  pop_front() {
    return this.deque.length ? this.deque.shift() : -1;
  }

  pop_back() {
    return this.deque.length ? this.deque.pop() : -1;
  }

  size() {
    return this.deque.length;
  }

  empty() {
    return this.deque.length === 0 ? 1 : 0;
  }

  front() {
    return this.deque.length ? this.deque[0] : -1;
  }

  back() {
    return this.deque.length ? this.deque[this.deque.length - 1] : -1;
  }
}

const deque = new Deque();
const result = [];

for (let i = 1; i < input.length; i++) {
  const [command, value] = input[i].split(" ");

  switch (command) {
    case "push_front":
      deque.push_front(Number(value));
      break;
    case "push_back":
      deque.push_back(Number(value));
      break;
    case "pop_front":
      result.push(deque.pop_front());
      break;
    case "pop_back":
      result.push(deque.pop_back());
      break;
    case "size":
      result.push(deque.size());
      break;
    case "empty":
      result.push(deque.empty());
      break;
    case "front":
      result.push(deque.front());
      break;
    case "back":
      result.push(deque.back());
      break;
  }
}

console.log(result.join("\n"));
