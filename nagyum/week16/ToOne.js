function solution(num_list) {
  var answer = 0;
  for (let i = 0; i < num_list.length; i++) {
    let a = num_list[i];
    while (a != 1) {
      if (a % 2 === 0) {
        a = a / 2;
        answer++;
      } else {
        a = (a - 1) / 2;
        answer++;
      }
    }
  }
  return answer;
}
