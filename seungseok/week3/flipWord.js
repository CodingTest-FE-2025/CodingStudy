// https://www.acmicpc.net/problem/17413
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./flipWord.txt")
  .toString()
  .trim();

const arr = [...input];

let a = [];
let b = true;
let c = [];

for (i = 0; i < arr.length; i++) {
  if (b === true && arr[i] !== "<" && arr[i] !== ">" && arr[i] !== " ") {
    a.unshift(arr[i]);
  }
  if (b === false && arr[i] !== "<" && arr[i] !== ">" && arr[i] !== " ") {
    a.push(arr[i]);
  }
  if (arr[i] === "<") {
    b = false;
    a.push(arr[i]);
  }
  if (arr[i] === ">") {
    b = true;
    a.push(arr[i]);
    const d = a.join("");
    a = [];
    c.push(d);
  }
  if (b === true && arr[i] === " ") {
    a.push(arr[i]);
    const d = a.join("");
    a = [];
    c.push(d);
  }
  if (b === false && arr[i] === " ") {
    a.push(arr[i]);
  }
}

if (a.length > 0) {
  c.push(a.join(""));
}

const result = c.join("");

/**
 * 생각한 방법
 *
 * a 빈배열
 * b 는 push할지 unshift할지 체크할 불린값
 * c 는 > 혹은 띄어쓰기 만나면 이전값을 보내줄곳
 *
 * 1. arr를 배열로 변환 for문
 * 2. b가 true이면서 일반 문자를 만나면 unshift();
 * 3. b가 false이면서 일반 문자를 만나면 push();
 * 3. "<"을 만나면 b를 false로 바꾸고 push();
 * 4. ">"을 만나면 b를 true로 바꾸고 push(); * 이전 값들 배열을 합쳐서 비우고 c에 push();
 * 5. b가 true이면서 띄어쓰기 만나면 push(); * 이전 값들 배열 합쳐서 비우고 c에 push();
 * 6. b가 false이면서 띄어쓰기 만나면 push();
 * 7. a에 단어가 남아있으면 배열 합쳐서 c에 push();
 */

console.log(result);
