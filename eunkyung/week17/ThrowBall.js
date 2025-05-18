function solution(numbers, k) {
  let count = 0;
  let nowNum = 1;
  while (count < k - 1) {
    const nextNum = nowNum + 2;
    if (nextNum > numbers.length) {
      nowNum = nextNum - numbers.length;
      count++;
    } else {
      nowNum = nextNum;
      count++;
    }
  }
  return nowNum;
}

console.log(solution([1, 2, 3, 4, 5, 6], 5));
