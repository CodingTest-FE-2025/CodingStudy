function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let q = 1; q <= i; q++) {
      if (i % q === 0) {
        count++;
      }
    }
    if (count % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
