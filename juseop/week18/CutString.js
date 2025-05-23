/**
 * n^2 배열 자르기
 * 정수 n, left, right가 매개변수로 주어질 때, 1차원 배열을 만들고자 한다.
 * n행 n 열 크기의 비어있는 2차원 배열을 만든다.
 * i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복한다.
 * 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채운다.
 * 1행, 2행, ..., n 행을 잘라내어 모두 이어 붙인 새로운 1차원 배열을 만든다.
 * 새로운 1차원 배열을 arr이라 할때, arr[lett]부터, arr[left+1],..., arr[right]만 남기고 나머지는 지운다.
 *
 * 제한 사항
 * 1<= n <= 10^7
 * 0 <= left <= right < n^2
 * right - left < 10^5
 *
 * 입출력 예
 * n = 3, left = 2, right = 5 result = [3, 2, 2, 3]
 * n = 4, left = 7, right = 14 result = [4, 3, 3, 4, 4, 4, 4]
 */

function solution(n, left, right) {
  let answer = [];
  for (let i = left; i <= right; i++) {
    let row = Math.floor(i / n);
    let col = i % n;
    answer.push(Math.max(row, col) + 1);
  }
  return answer;
}
