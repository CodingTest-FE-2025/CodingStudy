function solution(nums) {
  var answer = 0;
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        result.push([nums[i], nums[j], nums[k]]);
      }
    }
  }

  result.forEach((value) => {
    let sum = 0;
    value.forEach((item) => {
      sum += item;
    });
    isPrime(sum) ? answer++ : "";
  });

  return answer;
}

function isPrime(number) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) return false;
  }
  return true;
}

console.log(solution([1, 2, 3, 4])); //1
