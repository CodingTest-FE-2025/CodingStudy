function solution(clothes) {
  // Map을 사용해 각 종류에 해당하는 의상 개수 저장
  const typeCount = new Map();
  // for of를 통해서 각 타입의 갯수를 구함
  for (const [name, type] of clothes) {
    typeCount.set(type, (typeCount.get(type) || 0) + 1);
  }
  //선택하지 않는 경우의 수 1을 더해서 모두 곱함.
  let combinations = 1;
  for (const count of typeCount.values()) {
    combinations *= count + 1;
  }
  // 위 +1이 선택하지 않은 걸 더했으니, type 모두 아무것도 선택하지 않는 경우의 수가 포함되어 있음. 그래서 -1
  return combinations - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); // 5
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); // 3
