/** 내적
 * 이중 for 문으로 푸는 생각이 먼저 들었는데 시간 복잡도가 그럼 제곱이 되니까.. 
 * 그래서 생각해보니 같은 길이 일꺼라서 인덱스끼리 비교해서 곱함
 */

function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
