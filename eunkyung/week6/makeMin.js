function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  A.map((value, index) => {
    answer = answer + value * B[index];
  });

  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4])); //29
