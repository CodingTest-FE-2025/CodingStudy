function solution(num) {
  var answer = 0;
  if (num === 1) return 0;

  while (num > 1 && answer < 501) {
    if (num % 2 === 0) {
      num = num / 2;
      answer++;
    } else {
      num = num * 3 + 1;
      answer++;
    }
  }

  return answer > 500 ? -1 : answer;
}
