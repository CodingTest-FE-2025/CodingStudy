function solution(citations) {
  var answer = 0; //h편 이상
  let list = 0; //h편 이상
  for (let h = 0; h <= citations.length; h++) {
    list = 0;
    citations.map((value) => {
      if (value >= h) {
        list++;
      }
    });
    if (list >= h) {
      answer = h;
    }
  }

  return answer;
}

console.log(solution([3, 0, 6, 1, 5])); //3
