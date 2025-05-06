/**
 * 디펜스 게임
 * 준호가 보유한 병사 n명으로 연속되는 적의 공격을 순서대로 막는 게임.
 * 다음과 같은 규칙이 있다.
 * 1. 준호는 처음에 병사 n명을 가지고 있다.
 * 2. 매 라운드마다 enemy[i]명의 적이 공격을 한다.
 * 3. 남은 병사 중 enemy[i]명 만큼 소모하여 enemy[i] 마리의 적을 막을 수 있다.
 *    예를 들어 남은 병사가 7명이고, 적의 수가 2마리인 경우, 현재 라운드를 막으면 7-2=5명이 남는다.
 *    남은 병사의 수보다 현재 라운드의 적의 수가 많다면 게임은 종료
 * 4. 게임에는 무적권이라는 스킬이 있으며, 무적권을 사용하면 병사의 소모 없이 한 라운드를 막을 수 있다.
 *    무적권은 최대 K번 사용 가능.
 * 준호는 무적권을 사용하여 최대한 많은 라운드를 막고 싶다.
 * 준호가 처음 가지고 있는 병사의 수 n, 사용가능한 무적권의 횟수 k, 매 라운드마다 공격해오는 적의 수가 순서대로 담긴 정수 배열 enemy가 주어질 때,
 * 준어는 몇 라운드까지 막을 수 있는지 return.
 *
 * 제한 사항
 * 1 <= n <= 1,000,000,000
 * 1 <= k <= 500,000
 * 1 <= enemy.length <= 1,000,000
 * 1 <= enemy[i] <= 1,000,000
 * enemy[i]에는 i+1 라운드에서 공격해오는 적의 수가 담겨있다.
 * 모든 라운드를 막을 수 있는 경우에는 enemy[i]의 길이를 return.
 *
 * 입출력 예
 * n = 7, k = 3, enemy = [4, 2, 4, 5, 3, 3, 1] result = 5
 * n = 2, k = 4, enemy = [3, 3, 3, 3] result = 4
 */

function solution(n, k, enemy) {
  let answer = 0;
  for (let i = 0; i < enemy.length; i++) {
    if (n >= enemy[i]) {
      n -= enemy[i];
      answer++;
    } else if (k > 0) {
      k--;
      answer++;
    } else {
      break;
    }
  }
  return answer;
}
// 처음에 풀었던 코드
// 테스트는 통과 했지만 제출 했을 때 나가리..
// 무적권을 적이 적어도 사용할 수 있는 경우를 생각 못함.

class MinHeap {
  constructor() {
    this.heap = [null];
  }
  peek() {
    return this.heap[1];
  }

  push(v) {
    this.heap.push(v);
    let i = this.heap.length - 1,
      pi = Math.floor(i / 2);

    while (pi !== 0 && this.heap[i] < this.heap[pi]) {
      [this.heap[i], this.heap[pi]] = [this.heap[pi], this.heap[i]];
      (i = pi), (pi = Math.floor(i / 2));
    }
  }

  pop() {
    const root = this.heap[1];
    this.heap[1] = this.heap.pop();

    let i = 1,
      l = 2,
      r = 3;

    while (this.heap[i] > this.heap[l] || this.heap[i] > this.heap[r]) {
      if (this.heap[r] < this.heap[l]) {
        [this.heap[i], this.heap[r]] = [this.heap[r], this.heap[i]];
        i = r;
      } else {
        [this.heap[i], this.heap[l]] = [this.heap[l], this.heap[i]];
        i = l;
      }
      l = i * 2;
      r = i * 2 + 1;
    }

    return root;
  }
}

function solution(n, k, enemy) {
  let idx = 0;
  const pq = new MinHeap();
  const validator = (n, operand) => n > operand;
  const returnIdx = (n, operand, idx) => (n === operand ? idx + 1 : idx);

  if (k >= enemy.length) return enemy.length;

  while (k) {
    pq.push(enemy[idx]);
    idx += 1;
    k -= 1;
  }

  while (n) {
    let operand = enemy[idx];
    if (pq.peek() < enemy[idx]) {
      operand = pq.pop();
      pq.push(enemy[idx]);
    }
    if (validator(n, operand)) {
      n -= operand;
    } else {
      return returnIdx(n, operand, idx);
    }

    idx += 1;
  }

  return idx;
}
// 도저히 모르겠어서 찾아보니 힙이라는걸 이용해서 다들 풀었음.
