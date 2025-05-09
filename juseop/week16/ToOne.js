/**
 * 1로 만들기
 * 정수가 있을 때, 짝수라면 반을 나누고, 홀수라면 1을 빼고 반으로 나누면
 * 나머지는 1이 된다.
 * 정수들이 담긴 배열 num_list가 주어질 때,
 * num_list의 모든 원소를 1로 만들기 위한 나누기 연산 횟수를 return.
 *
 * 제한 사항
 * 3 <= num_list의 길이 <= 15
 * 1 <= num_list의 원소 <= 30
 *
 * 입출력 예
 * num_list = [12, 4, 15, 1, 14] => 11
 */

function solution(num_list) {
  let answer = 0;
  for (let i = 0; i < num_list.length; i++) {
    while (num_list[i] > 1) {
      if (num_list[i] % 2 === 0) {
        num_list[i] = num_list[i] / 2;
      } else {
        num_list[i] = (num_list[i] - 1) / 2;
      }
      answer++;
    }
  }
  return answer;
}
