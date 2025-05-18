function solution(n) {
  const repeat = Math.floor(n / 2);
  if (n % 2 === 0) {
    return "수박".repeat(repeat);
  } else {
    return "수박".repeat(repeat) + "수";
  }
}

console.log(solution(4));
