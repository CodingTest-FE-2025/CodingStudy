// https://www.acmicpc.net/problem/28279

/**
 * 생각한 방법
 * 1.
 */

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./deque.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0][0]; // 명령 개수
const commands = input.slice(1); // 명령 목록

// 두 개의 배열로 덱 구현
const deque = {
  front: [],
  back: [],
  pushFront(x) {
    this.front.push(x); // front 배열의 끝에 추가
  },
  pushBack(x) {
    this.back.push(x); // back 배열의 끝에 추가
  },
  popFront() {
    if (this.front.length > 0) {
      return this.front.pop(); // front 배열의 끝에서 제거
    } else if (this.back.length > 0) {
      return this.back.shift(); // back 배열의 앞에서 제거
    }
    return -1; // 비어있으면 -1
  },
  popBack() {
    if (this.back.length > 0) {
      return this.back.pop(); // back 배열의 끝에서 제거
    } else if (this.front.length > 0) {
      return this.front.shift(); // front 배열의 앞에서 제거
    }
    return -1; // 비어있으면 -1
  },
  size() {
    return this.front.length + this.back.length; // 두 배열의 길이 합산
  },
  isEmpty() {
    return this.size() === 0 ? 1 : 0; // 비어있는지 확인
  },
  frontElement() {
    if (this.front.length > 0) {
      return this.front[this.front.length - 1]; // front 배열의 끝 요소
    } else if (this.back.length > 0) {
      return this.back[0]; // back 배열의 첫 요소
    }
    return -1; // 비어있으면 -1
  },
  backElement() {
    if (this.back.length > 0) {
      return this.back[this.back.length - 1]; // back 배열의 끝 요소
    } else if (this.front.length > 0) {
      return this.front[0]; // front 배열의 첫 요소
    }
    return -1; // 비어있으면 -1
  },
};

// 명령 처리
const results = [];

for (let i = 0; i < n; i++) {
  const [cmd, value] = commands[i];
  if (cmd === 1) {
    deque.pushFront(value); // 맨 앞에 추가
  } else if (cmd === 2) {
    deque.pushBack(value); // 맨 뒤에 추가
  } else if (cmd === 3) {
    results.push(deque.popFront()); // 맨 앞의 요소 제거 및 출력
  } else if (cmd === 4) {
    results.push(deque.popBack()); // 맨 뒤의 요소 제거 및 출력
  } else if (cmd === 5) {
    results.push(deque.size()); // 덱의 크기 출력
  } else if (cmd === 6) {
    results.push(deque.isEmpty()); // 덱이 비어있는지 확인
  } else if (cmd === 7) {
    results.push(deque.frontElement()); // 맨 앞의 요소 출력
  } else if (cmd === 8) {
    results.push(deque.backElement()); // 맨 뒤의 요소 출력
  }
}

// 결과 출력
console.log(results.join("\n"));

// const n = input[0][0]; // 명령 개수
// const commands = input.slice(1); // 명령 목록

// const deque = []; // 하나의 배열로 관리
// const results = []; // 출력 결과 저장용

// for (let i = 0; i < n; i++) {
//   const [cmd, value] = commands[i];

//   if (cmd === 1) {
//     // 맨 앞에 추가
//     deque.unshift(value);
//   } else if (cmd === 2) {
//     // 맨 뒤에 추가
//     deque.push(value);
//   } else if (cmd === 3) {
//     // 맨 앞의 요소 제거 및 출력
//     results.push(deque.length > 0 ? deque.shift() : -1);
//   } else if (cmd === 4) {
//     // 맨 뒤의 요소 제거 및 출력
//     results.push(deque.length > 0 ? deque.pop() : -1);
//   } else if (cmd === 5) {
//     // 덱의 크기 출력
//     results.push(deque.length);
//   } else if (cmd === 6) {
//     // 덱이 비어있는지 확인
//     results.push(deque.length === 0 ? 1 : 0);
//   } else if (cmd === 7) {
//     // 맨 앞의 요소 출력
//     results.push(deque.length > 0 ? deque[0] : -1);
//   } else if (cmd === 8) {
//     // 맨 뒤의 요소 출력
//     results.push(deque.length > 0 ? deque[deque.length - 1] : -1);
//   }
// }

// console.log(results.join("\n"));
