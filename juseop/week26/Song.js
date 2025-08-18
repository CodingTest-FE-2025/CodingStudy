/**
 * 노래악보
 * 총 N개의 악보가 있고 i번째 악보는 Bi초로 이루어져 있다.
 * 학생들은 0초부터 1번 악보를 따라 노래하기 시작. 즉, B1-1 초에 1번 악보를 끝마치게 되고 B1초부터 B1+B2-1초까지 2번 악보를 따라 부르게 된다.
 * 악보 1, 1, 2, 3, 3, 3
 * 시간 0, 1, 2, 3, 4, 5
 * 문제는 T1부터 TQ까지 Q개의 시간에 대한 대답을 하는 것인데, Ti초 때 노래한느 악보를 i번째에 출력하는 것이다.
 *
 * 입력
 * 첫 줄에는 악보 수 N(1 <= N <= 100)과 질문의 개수 Q(1 <= Q <= 1,000)가 주어진다.
 * 다음 N개의 줄에는 1번 악보부터 N번 악보까지 각 안보가 차지하는 시간(초)이 한 줄에 하나씩 주어진다. 각 악보가 차지하는 시간은 100 이하의 정수이다.
 * 다음 Q개의 줄에는 알고자 하는 Q개의 시간(초)이 한 줄에 하나씩 주어진다. 묻는 시간 역시 정수
 *
 * 출력
 * Q개에 줄에 1번 질분부터 Q번 질문까지 해당 시간(초)에 부르는 악보의 번호를 출력한다.
 */

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;
const N = input[idx++];
const Q = input[idx++];
const B = new Array(N);
for (let i = 0; i < N; i++) B[i] = input[idx++];
const queries = [];
for (let i = 0; i < Q; i++) queries.push(input[idx++]);

// 각 악보의 구간 계산
const ranges = [];
let start = 0;
for (let i = 0; i < N; i++) {
  let end = start + B[i] - 1;
  ranges.push([start, end]);
  start = end + 1;
}

let result = [];
for (const t of queries) {
  for (let i = 0; i < N; i++) {
    const [s, e] = ranges[i];
    if (s <= t && t <= e) {
      result.push(i + 1); // 1-based 번호
      break;
    }
  }
}

console.log(result.join("\n"));
