function solution(n, a, b) {
  let isFiting = true;
  let answer = 1;
  while (isFiting) {
    if (nextNumber(a) === nextNumber(b)) {
      isFiting = false;
    } else {
      a = nextNumber(a);
      b = nextNumber(b);
      answer++;
    }
  }
  return answer;
}

function nextNumber(number) {
  if (number % 2 === 0) {
    return number / 2;
  } else {
    return (number + 1) / 2;
  }
}

console.log(solution(8, 4, 7)); //3
