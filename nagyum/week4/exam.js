/**
 *
 * 수포자 1 = [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ]
 * => 1, 2, 3, 4, 5, 순서로 답안 작성
 * 수포자 2 = [ 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5,]
 * => 2, 1, 2, 3, 2, 4, 2, 5, 순서로 답안 작성
 * 수포자 3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ]
 * =>3, 3, 1, 1, 2, 2, 4, 4, 5, 5 순서로 답안 작성
 * answer 배열과 맞는 숫자를 찾아서 일치하는 숫자가 제일 큰 사람
 *
 * sol.
 * array.reducer를 사용
 *
 */

function solution(answers) {
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === student1[i % student1.length]) scores[0]++;
    if (answers[i] === student2[i % student2.length]) scores[1]++;
    if (answers[i] === student3[i % student3.length]) scores[2]++;
  }

  const maxScore = Math.max(...scores);

  let result = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) result.push(i + 1);
  }
  return result;
}
