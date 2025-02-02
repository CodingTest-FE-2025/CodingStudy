function solution(answers) {
  var answer = [];
  let count = [0, 0, 0];
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (student1[i % 5] === answers[i]) {
      count[0] = count[0] + 1;
    }
    if (student2[i % 8] === answers[i]) {
      count[1] = count[1] + 1;
    }
    if (student3[i % 10] === answers[i]) {
      count[2] = count[2] + 1;
    }
  }

  let max = 0;
  for (i of count) {
    if (max < i) {
      max = i;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (count[i] === max) {
      answer.push(i + 1);
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); //[1]
console.log(solution([1, 3, 2, 4, 2])); //[1,2,3]
