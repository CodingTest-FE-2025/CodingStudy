function solution(clothes) {
  let answer = 1;
  const swappedClothes = clothes.map(([key, value]) => [value, key]);
  let hash = {};

  for (let name of swappedClothes) {
    hash[name[0]] = (hash[name[0]] || 0) + 1;
  }

  for (let value of Object.values(hash)) {
    answer = answer * (value + 1);
  }

  return answer - 1;
}

console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); //5
