function solution(N, stages) {
  var answer = [];
  let stage = stages.length;
  for (let i = 1; i <= N; i++) {
    const pass = stages.filter((z) => z === i).length;
    stage -= pass;
    answer.push([i, pass / stage]);
  }
  answer.sort((a, b) => b[1] - a[1]);

  return answer.map((item) => item[0]);
}
