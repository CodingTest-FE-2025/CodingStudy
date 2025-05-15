/**
 * 공 던지기
 * 공은 1번부터 던지며 오른쪽으로 한명을 건너뛰고 그 다음 사람에게만 던질 수 있다.
 * 친구들의 번호가 들어있는 정수 배열 numbers와 정수 k가 주어질 때,
 * k번째로 던지는 사람의 번호를 return.
 *
 * 제한 사항
 * 2 <= numbers의 길이 <= 100
 * 0 < k <= 1,000
 * numbers의 첫 번째와 마지막번호는 실제로 바로 옆에 있다.
 * numbers는 1부터 시작하며 번호는 순서대로 올라간다.
 *
 * 입출력 예
 * numbers = [1, 2, 3, 4], k = 2 result = 3
 * numbers = [1, 2, 3, 4, 5, 6], k = 5 result = 3
 * numbers = [1, 2, 3] , k = 3 result = 2
 */

// 1. numbers 배열에서 1번부터 던지기 시작
// 2. 오른쪽으로 한명을 건너뛰고 다음 사람에게 던지기
// 3. 즉 한번 던질 때 마다 인덱스 2씩 증가
function solution(numbers, k) {
  let answer = numbers[((k - 1) * 2) % numbers.length];
  return answer;
}
