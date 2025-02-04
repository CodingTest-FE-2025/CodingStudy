function solution(brown, yellow) {
  var answer = [];
  const carpet = brown + yellow;
  let width = 0;
  let height = 0;

  for (let i = 3; i < 5000; i++) {
    width = i; //가로 길이를 먼저 정해줌
    height = carpet / width;
    if ((width - 2) * (height - 2) === yellow) {
      if (width >= height) {
        //조건에 맞다면 answer에 넣어줌
        answer.push(width);
        answer.push(height);
      }
    }
  }

  return answer;
}

console.log(solution(10, 2)); //[4,3]
console.log(solution(8, 1)); //[3, 3]
console.log(solution(24, 24)); //[8, 6]
