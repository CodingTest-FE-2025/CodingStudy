function solution(num_list) {
  let result = 0;
  num_list.forEach((value) => {
    result = result + makeOne(value);
  });
  return result;
}

function makeOne(num) {
  let count = 0;
  while (num !== 1) {
    if (num % 2 === 1) {
      num = (num - 1) / 2;
      count++;
    } else {
      num = num / 2;
      count++;
    }
  }
  return count;
}

console.log(solution([12, 4, 15, 1, 14])); //11
