function solution(progresses, speeds) {
  var answer = [];
  var date = [];
  for (let i = 0; i < progresses.length; i++) {
    let n = (100 - progresses[i]) / speeds[i];
    date.push(Math.ceil(n));
  }

  let initial = date[0];
  let sum = 1;
  for (let i = 1; i <= date.length; i++) {
    if (initial >= date[i]) {
      sum++;
    } else {
      answer.push(sum);
      sum = 1;
      initial = date[i];
    }
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); //[2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //[1, 3, 2]
