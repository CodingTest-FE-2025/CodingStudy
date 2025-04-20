/** 부족한 금액 계산하기
 * 그냥 필요한 돈을 계산 한 다음에 가지고 있는 돈에서 빼면 됨
 * 0 인 경우를 생각 안했었어서 삼항 연산자로 해결함
 *
 */
function solution(price, money, count) {
  var answer = 0;

  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }
  answer -= money;
  return answer > 0 ? answer : 0;
}
