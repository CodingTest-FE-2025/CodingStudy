// https://school.programmers.co.kr/learn/courses/30/lessons/12977

/**
 * 3개 골라서 조합 구하기
 * 3개 뽑은 수의 합 구하기
 * 소수인지 확인
 * 소수면 answer에 1씩 더하기
 */

function solution(nums) {
  var answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        if (sum > 1) {
          let prime = true;
          for (let d = 2; d <= Math.sqrt(sum); d++) {
            if (sum % d === 0) {
              prime = false;
              break;
            }
          }
          if (prime) {
            answer++;
          }
        }
      }
    }
  }

  return answer;
}
console.log(solution([1, 2, 3, 4])); // 1
