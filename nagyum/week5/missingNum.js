function solution(numbers) {
  let sum = 0;
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  arr.forEach((num) => {
    if (!numbers.includes(num)) {
      sum += num;
    }
  });
  return sum;
}
