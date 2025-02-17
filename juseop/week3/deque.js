/**
 * 덱2
 * 8가지의 케이스를 이용해 문제해결
 * 1. 정수 x를 덱 앞에 넣는다. 
 * 2. 정수 x를 덱 뒤에 넣는다.
 * 3. 정수가 있다면 맨앞의 정수를 빼고 출력 없다면 -1 출력
 * 4. 정수가 있다면 맨뒤의 정수를 뺴고 풀력 없다면 -1 출력
 * 5. 덱에 들어있는 정수의 개수를 출력
 * 6. 덱이 비어있으면 1, 아니면 0 출력
 * 7. 덱에 정수가 있다면 맨앞의 정수를 출력. 없다면 -1을 대신 출력
 * 8. 덱에 정수가 있다면 맨뒤의 정수를 출력. 없다면 -1을 대신 출력
 */

// function processCommands(commands){
//     const deque= [];
//     const results=[];
//     for (let command of commands){
//         const parts=command.split('');
//         switch (parts[0]){
//             case '1': // 정수 X를 덱의 앞에 넣는다.
//                 deque.unshift(parseInt(parts[1]));
//                 break;
//             case '2': // 정수 X를 덱의 뒤에 넣는다.
//                 deque.push(parseInt(parts[1]));
//                 break;
//             case '3': // 맨 앞의 정수를 빼고 출력
//                 results.push(deque.length > 0 ? deque.shift():-1);
//                 break;
//             case '4': // 맨뒤의 정수를 빼고 출력
//                 results.push(deque.length > 0 ? deque.pop() : -1);
//                 break;
//             case '5': // 덱에 들어있는 정수의 개수를 출력
//                 results.push(deque.length);
//                 break;
//             case '6':// 덱이 비어있으면 1, 아니면 0을 출력.
//                 results.push(deque.length === 0 ? 1: 0);
//                 break;     
//             case '7': //맨앞의 정수를 출력.
//                 results.push(deque.length > 0 ? deque[0] : -1);
//                 break;
//             case '8': // 맨뒤의 정수를 출력.
//                 results.push(deque.length > 0 ? deque[deque.length -1]: -1);
//                 break;           
//         }
//     }
//     return results;
// }

//자바스크립트로 풀어보고 node.js로 제출하는 방법 찾아봄.
// const fs = require('fs');

// function processCommands(commands) {
//     const deque = [];
//     const results = [];

//     for (let command of commands) {
//         const parts = command.split(' ');
//         switch (parts[0]) {
//             case '1': // 정수 X를 덱의 앞에 넣는다.
//                 deque.unshift(parseInt(parts[1], 10));
//                 break;
//             case '2': // 정수 X를 덱의 뒤에 넣는다.
//                 deque.push(parseInt(parts[1], 10));
//                 break;
//             case '3': // 맨 앞의 정수를 빼고 출력.
//                 results.push(deque.length > 0 ? deque.shift() : -1);
//                 break;
//             case '4': // 맨 뒤의 정수를 빼고 출력.
//                 results.push(deque.length > 0 ? deque.pop() : -1);
//                 break;
//             case '5': // 덱에 들어있는 정수의 개수를 출력.
//                 results.push(deque.length);
//                 break;
//             case '6': // 덱이 비어있으면 1, 아니면 0을 출력.
//                 results.push(deque.length === 0 ? 1 : 0);
//                 break;
//             case '7': // 맨 앞의 정수를 출력.
//                 results.push(deque.length > 0 ? deque[0] : -1);
//                 break;
//             case '8': // 맨 뒤의 정수를 출력.
//                 results.push(deque.length > 0 ? deque[deque.length - 1] : -1);
//                 break;
//         }
//     }

//     return results;
// }

// // 입력 처리
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const commands = input.slice(1); // 첫 번째 줄은 명령의 개수, 나머지는 명령어 리스트

// // 결과 출력
// const output = processCommands(commands);
// console.log(output.join('\n'));
// //시간초과
const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./week3/deque.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

input.shift();

const deque = {
  data: {},
  head: 0, // 덱의 앞쪽 인덱스.
  tail: 0, // 덱의 뒤쪽 인덱스.
  pushFront(x) { // 같은 덱의 앞쪽에 추가
    this.head -= 1; 
    this.data[this.head] = x; // head를 하나 줄이고 그위치에 x저장
  },
  pushBack(x) { //값을 덱의 뒤쪽에 추가
    this.data[this.tail] = x; 
    this.tail += 1; //현재 tail 위치에 X를 저장하고 tail을 하나 늘린다.
  },
  popFront() {
    if (this.head === this.tail) return -1; //비어있는 경우
    const value = this.data[this.head];
    delete this.data[this.head]; // 덱의 앞쪽 값을 제거하고 반환
    this.head += 1;
    return value;
  },
  popBack() {
    if (this.head === this.tail) return -1; //비어있는 경우
    this.tail -= 1;
    const value = this.data[this.tail];
    delete this.data[this.tail]; // 덱의 뒤쪽 값을 제거하고 반환
    return value;
  },
  size() { 
    return this.tail - this.head;
  },// 덱에 들어있는 요소의 개수를 반환
  isEmpty() {
    return this.head === this.tail ? 1 : 0;
  }, //덱이 비어있으면 1, 그렇지 않으면 0을 반환
  front() {
    return this.head === this.tail ? -1 : this.data[this.head];
  }, // 덱의 앞쪽 값을 반환. 비어있으면 -1을 반환
  back() {
    return this.head === this.tail ? -1 : this.data[this.tail - 1];
  }, // 덱의 뒤쪽 값을 반환. 비어있으면 -1을 반환
};

const result = [];

for (const [cmd, value] of input) {
  switch (cmd) {
    case 1:
      deque.pushFront(value); // 정수 X를 덱의 앞쪽에 넣음.
      break;
    case 2:
      deque.pushBack(value); // 정수 X를 덱의 뒤쪽에 넣음
      break;
    case 3:
      result.push(deque.popFront()); // 덱의 앞쪽 값을 제거하고 반환
      break;
    case 4:
      result.push(deque.popBack()); // 덱의 뒤쪽 값을 제거하고 반환
      break;
    case 5:
      result.push(deque.size()); // 덱의 크기를 반환
      break;
    case 6:
      result.push(deque.isEmpty()); // 덱이 비어있는지 확인
      break;
    case 7:
      result.push(deque.front()); //덱의 앞쪽 값 반환
      break;
    case 8:
      result.push(deque.back()); //덱의 뒤쪽 값 반환
      break;
    default:
      break;
  }
}

console.log(result.join("\n")); // 배열에 저장된 결과값을 줄바꿈으로 연결해 출력.
//다른 방법을 찾아봄. 

