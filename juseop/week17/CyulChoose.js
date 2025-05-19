/**
 * 귤 고르기
 * 수확한 귤 중 k개를 골라 상자 하나에 담아 판매하려고 한다.
 * 수확한 슐의 크기가 일정하지 않아 보기에 좋지 않다고 생각한 경화를 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화하고 싶다.
 * 경화가 수확한 귤 8개의 크기가 [1, 3, 2, 5, 4, 5, 2, 3]일 때, 경화가 귤 6개를 판매하고 싶다면,
 * 크기가 1, 4인 귤을 제외한 여섯개의 귤을 상자에 담으면, 귤의 크기의 종류가 2, 3, 5로 총 3가지 되며 이때가 서로 다른 종류가 최소일 경우.
 * 한 상자에 담으려는 귤의 개수 k와 귤의 크기를 담은 배열 tangerine이 매개변수로 주어진다. 귤 k개를 고를 떄 크기가 서로 다른 종류의 수의 최솟값을 return.
 *
 * 제한사항
 * 1<= tangerine의 길이 <= 100,000
 * 1<= tangerine의 원소 <= 10,000,000
 *
 * 입출력 예
 * k = 6, tangerine = [1, 3, 2, 5, 4, 5, 2, 3] return 3
 * k = 4, tangerine = [1, 1, 2, 2, 3, 3] return 2
 * k = 2, tangerine = [1, 1, 1, 1, 2, 2, 2, 3] return 1
 */

function solution(k, tangerine) {
  let answer = 0;
  const map = new Map();
  for (let i = 0; i < tangerine.length; i++) {
    if (map.has(tangerine[i])) {
      map.set(tangerine[i], map.get(tangerine[i]) + 1);
    } else {
      map.set(tangerine[i], 1);
    }
  }
  const arr = [...map.values()].sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (k <= 0) break;
    k -= arr[i];
    answer++;
  }
  return answer;
}
