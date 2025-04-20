function solution(numbers) {
  const set = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }

  const arr = Array.from(set).sort((a, b) => a - b);
  return arr;
}

console.log(solution([2, 1, 3, 4, 1])); //[2,3,4,5,6,7]
