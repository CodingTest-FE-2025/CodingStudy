function solution(food) {
  let result = "";
  food.forEach((value, idx) => {
    if (idx !== 0) {
      const count = Math.floor(value / 2);
      result = result + String(idx).repeat(count);
    }
  });
  return result + 0 + result.split("").reverse().join("");
}

console.log(solution([1, 3, 4, 6]));
