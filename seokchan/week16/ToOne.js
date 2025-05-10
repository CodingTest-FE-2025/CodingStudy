function solution(num_list) {
  let answer = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] !== 1) {
      while (num_list[i] !== 1) {
        if (num_list[i] % 2 === 0) {
          num_list[i] = num_list[i] / 2;
        } else {
          num_list[i] = (num_list[i] - 1) / 2;
        }
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution([12, 4, 15, 1, 14]));
