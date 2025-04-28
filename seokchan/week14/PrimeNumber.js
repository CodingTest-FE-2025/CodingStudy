/*
소수인지 판별하는 prime함수를 만들어놓음.
n이 아닌 다른수로 나눴을 경우 0이 안나오면 true를 리턴

삼중 for문을 통해서 배열안 3개의 수를 더한 값(sum)을 구함.
sum이 소수인지 prime함수에 넣어 판별하고 true라면 answer를 +1 시켜줌
*/

function solution(nums) {
  let answer = 0;

  function prime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (prime(sum)) {
          answer++;
        }
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
