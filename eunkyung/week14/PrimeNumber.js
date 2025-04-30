function solution(nums) {
  var answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let result = nums[i] + nums[j] + nums[k];
        isPrime(result) ? answer++ : null;
      }
    }
  }

  return answer;
}

function isPrime(number) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) return false;
  }
  return true;
}

console.log(solution([1, 2, 3, 4])); //1
