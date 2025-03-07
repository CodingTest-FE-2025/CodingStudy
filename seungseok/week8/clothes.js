// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const map = new Map();

  clothes.forEach(([a, b]) => {
    map.set(b, (map.get(b) || 0) + 1);
  });

  let answer = 1;
  for (let el of map.values()) {
    answer *= el + 1;
  }

  return answer - 1;
}

/**
 * 풀이방법
 * 1. clothes 배열을 돌며 각 요소의 종류를 키값, 각 종류의 아이템 갯수를 value로 하는 Map을 생성
 * 1-1. map.set(b, (map.get(b) || 0) + 1); <- map.get(b)가 undefined일 경우 0을 반환하고 1을 더한다.
 * 2. 생성된 Map을 돌며 각 종류의 아이템 갯수에 1을 더한다. 이유 : 하나씩 입을때 + 안입을때
 * 3. 아이템 갯수+1 값을 종류별로 곱한다.
 * 4. 모든 아이템을 안입는 경우 제외하기 위해 1을 뺀다.
 */

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
