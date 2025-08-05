/**
 * 랜선 자르기
 * 오영식과 박성원은 캠플 때 쓸 N개의 랜선을 만들어야한다.
 * 오영식은 자체적으로 K개의 랜선을 가지고 있다. 그러나 K개의 랜선은 길이가 모두 다르다.
 * 박성원은 랜선을 모두 N개 같은 길이의 랜선을 만들고 싶어해서 K개의 랜선을 잘라서 만들어야한다.
 * 300cm짜리 랜선에서 140cm 랜선을 두개 잘라내면 20cm는 버려야한다.(이미 잘라낸 랜선은 버려야한다.)
 * 편의를 위해 랜선을 자르거나 만들 때 손실되는 길이는 없다고 가정하며, 기존의 K개의 랜선으로 N개의 랜선을 만들 수 없는 경우는 없다고 가정.
 * 자를 때 항상 센티미터 단위로 정수길이만큼 자른다고 가정하자. N개보다 많이 만드는 것도 N개를 만드는것에 포함된다. 이때 만들 수 있는 최대 랜선의 길이를 구하는 프로그램을 작성.
 *
 * 입력
 * 첫째 줄에는 오영식이 이미 가지고 있느 랜선의 개수 K, 그리고 필요한 랜선의 수 N이 입력.
 * k는 1이상 10,000이하 정수, N은 1이상 1,000,000이하 정수. 항상 k <= N이다.
 * K줄에 걸쳐 이미 가지고 있는 각 랜선의 길이가 센티미터 단위의 정수로 입력.
 *
 */

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [K, N] = input[0].split(" ").map(Number);
let lines = input.slice(1).map(Number);
let start = 1;
let end = Math.max(...lines);
let result = 0;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let count = lines.reduce((acc, line) => acc + Math.floor(line / mid), 0);

  if (count >= N) {
    result = mid; // mid 길이로 N개 이상의 랜선을 만들 수 있음
    start = mid + 1; // 더 긴 랜선 길이를 찾기 위해 탐색 범위를 늘림
  } else {
    end = mid - 1; // N개를 만들 수 없으므로 길이를 줄임
  }
}
console.log(result); // 최대 랜선 길이 출력
