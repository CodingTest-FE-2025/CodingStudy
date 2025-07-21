/**
 * 회전하는 큐
 *
 * 지민이는 N개의 원소를 포함하고 있는 양뱡향 순환 큐를 가지고 있다.
 * 지민이는 이 큐에서 몇개의 원소를 뽑아내려고 한다.
 * 지민이는 이 큐에서 다음과 같은 3가지 연산을 수행할 수 있다.
 * 1. 첫번째 원소를 뽑아낸다. 이 연산을 수행하면, 원래 큐의 원소가 a1, ..., ak이었던 것이 a2, ..., ak와 같이 된다.
 * 2. 왼쪽으로 한 칸 이동시킨다. 이 연산을 수행하면, a1, ..., ak가 a2, ..., ak, a1이 된다.\
 * 3. 오른쪽으로 한 칸 이동시킨다. 이 연산을 수행하면, a1, ..., ak가 ak, a1, ..., ak-1이 된다.
 * 큐에 처음 포함되어 있던 수 N이 주어진다. 그리고 지민이가 뽑아내려고 하는 원소의 위치가 주어진다. (이 위치는 가장 처음 큐에서의 위치이다.)
 * 이때, 그 원소를 주어진 순서대로 뽑아내는데 드는 2번, 3번 연산의 최솟값을 출력하는 프로그램을 작성하시오.
 *
 * 입력
 * 첫째 줄에 큐의 크기가 N과 뽑아내려고 하는 수의 개수  M이 주어진다. N은 50보다 작거나 같은 자연수이고, M은 N보다 작거나 같은 자연수이다.
 * 둘째 줄에는 지민이가 뽑아내려고 하는 수의 위치가 순서대로 주어진다. 위치는 1보다 크거나 같고, N보다 작거나 같은 자연수이다.
 *
 * 예제 출력
 *
 * 10, 3 / 1, 2, 3 => 0
 * 10,3  / 2, 9, 5 => 8
 * 32, 6 / 27, 16, 30, 11, 6, 23 => 59
 * 10, 10 / 1, 6, 3, 2, 7, 9, 8, 4, 10, 5 => 14
 *
 */

// const fs = require('fs');
// const input = fs.readFileSync('./test.txt').toString().split('\n');
// input= input.map((v)=> v.split('').map((v)=> +v));
// const [length, count] = [input[0][0], input[0][1]];
// const arr = input[1];
// const que = new Array(length).fill(1).map((v, index)=> v + index);
// let sum =0;
// for (let i = 0; i < count; i++) {
//   const target = arr[i];
//   const index = que.indexOf(target);

//   if (index === 0) {
//     que.shift();
//     continue;
//   }

//   if (index <= que.length / 2) {
//     for (let j = 0; j < index; j++) {
//       que.push(que.shift());
//       sum++;
//     }
//   } else {
//     for (let j = que.length - index; j > 0; j--) {
//       que.unshift(que.pop());
//       sum++;
//     }
//   }

//   que.shift();
// }
//런타임 에러..

// const fs = require("fs");
// let input = fs.readFileSync("./test.txt").toString().split("\n");
// input = input.map((v) => v.split("").map((v) => +v));
// const [length, m] = [input[0][0], input[0][1]];
// const arr = input[1];
// const que = new Array(length).fill(1).map((v, index) => v + index);
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   while (arr[i] !== que[0]) {
//     let index = que.indexOf(arr[i]);
//     let length = que.length / 2;
//     if (index >= length) {
//       que.unshift(que.pop());
//       sum++;
//     } else {
//       que.push(que.shift());
//       sum++;
//     }
//   }
//   que.shift();
// }

// console.log(sum);
//런타임 에러..
//결국 찾아봄
const [info, input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const [len, targetCount] = info.split(" ").map((val) => +val);
const targets = input.split(" ").map((val) => +val);

const deque = [];

for (let i = 1; i <= len; i++) deque.push(i);

const getCount = () => {
  let count = 0;

  for (let i = 0; i < targetCount; i++) {
    const target = targets[i];

    if (deque[0] === target) {
      deque.shift();

      continue;
    }

    if (deque.indexOf(target) > deque.length / 2) {
      while (deque[0] !== target) {
        deque.unshift(deque.pop());

        count += 1;
      }

      deque.shift();
    } else {
      while (deque[0] !== target) {
        deque.push(deque.shift());

        count += 1;
      }

      deque.shift();
    }
  }

  return count;
};

console.log(getCount());
