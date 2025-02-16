function solution(arr) {
  const min = [...arr].sort((a, b) => a - b);
  let answer = arr.filter((value) => value !== min[0]);

  if (answer.length <= 0) {
    return [-1];
  }

  return answer;
}

console.log(solution([4, 3, 2, 1])); //[4,3,2]
