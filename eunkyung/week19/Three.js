function solution(number) {
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        const value = number[i] + number[j] + number[k];
        if (value === 0) {
          count++;
        }
      }
    }
  }
  return count;
}
