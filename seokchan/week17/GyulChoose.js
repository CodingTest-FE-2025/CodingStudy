function solution(k, tangerine) {
  let answer = 0;
  const countArr = {};
  for (const size of tangerine) {
    countArr[size] = (countArr[size] || 0) + 1;
  }

  const counts = Object.values(countArr).sort((a, b) => b - a);

  let total = 0;
  for (const c of counts) {
    total += c;
    answer++;
    if (total >= k) break;
  }

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
