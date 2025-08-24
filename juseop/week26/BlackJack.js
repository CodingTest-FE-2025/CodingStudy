/**
 * 블랙잭
 * 카드의 합이 21을 넘지 않는 한도 내에서, 카드의 합을 최대한 크게 만드는 게임.
 * 각 카드에는 양의 정수가 쓰여 있다. 그 다음, 딜러는 N장의 카드를 모두 숫자가 보이도록 바닥에 놓는다.
 * 그런 후에 딜러는 숫자 M을 크게 외친다.
 * 이제 플레이어는 제한된 시간 안에 N장의 카드 중에서 3장의 카드를 골라야한다. 블랙잭 변형 게임이기 때문에, 플레이어가 고른 카드의 합은 M을 넘지 않으면서
 * M과 최대한 가깝게 만들어야 한다.
 * N장의 카드에 써져 있는 숫자가 주어졌을 때, M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 구해 출력하시오.
 *
 * 입력
 * 첫째 줄에 카드의 개수 N(3 <= N <= 100)과 M(10<= M <= 300,000)이 주어진다.
 * 둘째 줄에는 카드에 쓰여 있는 수가 주어지며, 이 값은 100,000을 넘지 않는 양의 정수이다.
 * 합이 M을 넘지 않는 카드 3장을 찾을 수 있는 경우만 입력으로 주어진다.
 *
 * 출력
 * 첫째 줄에 M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 출력한다.
 */
const fs = require("fs");
const tokens = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let p = 0;
const N = tokens[p++],
  M = tokens[p++];
const A = tokens.slice(p, p + N);

let best = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = A[i] + A[j] + A[k];
      if (sum === M) {
        console.log(M);
        process.exit(0);
      }
      if (sum < M && sum > best) best = sum;
    }
  }
}
console.log(best);
