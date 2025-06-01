function solution(s) {
  let answer = "";
  let sort = s.split(" ").sort((a, b) => a - b);
  let frist = sort[0];
  let last = sort[sort.length - 1];
  return (answer = frist + " " + last);
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
