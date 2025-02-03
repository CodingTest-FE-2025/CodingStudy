function solution(answers) {
  var answer = [];
  //수포자 정답 패턴
  const t1 = [1, 2, 3, 4, 5];
  const t2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const t3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  //각각의 최종 점수
  let t1Score = 0;
  let t2Score = 0;
  let t3Score = 0;

  //각 문제의 정답을 for문으로 확인하면서 점수 ++
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === t1[i % t1.length]) {
      t1Score++;
    }

    if (answers[i] === t2[i % t2.length]) {
      t2Score++;
    }

    if (answers[i] === t3[i % t3.length]) {
      t3Score++;
    }
  }

  //최고 점수 찾기
  const maxScore = Math.max(t1Score, t2Score, t3Score);

  //최고 점수와 일치하는 수포자 찾기
  if (t1Score === maxScore) {
    answer.push(1);
  }
  if (t2Score === maxScore) {
    answer.push(2);
  }
  if (t3Score === maxScore) {
    answer.push(3);
  }

  return answer;
}
