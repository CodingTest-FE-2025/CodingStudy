function solution(pr, location) {
  var answer = 0;

  while (pr.length !== 0) {
    var temp = pr[0];
    if (Math.max(...pr) !== temp) {
      pr.splice(0, 1);
      pr.push(temp);
      location -= 1;
      if (location < 0) location += pr.length;
    } else {
      pr.splice(0, 1);
      answer += 1;
      if (location === 0) break;
      location -= 1;
    }
  }

  return answer;
}

console.log(solution([2, 1, 3, 2], 2)); //1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); //5
