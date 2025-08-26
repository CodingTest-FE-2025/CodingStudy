/**
 * 주식 가격
 * 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때,
 * 가격이 떨어지지 않은 기간은 몇초인지를 return 하도록 solution 함수를 완성하시오.
 *
 * 제한 사항
 * prices의 각 가격은 1 이상 10,000 이하인 자연수이다.
 * prices의 길이는 2 이상 100,000 이하이다.
 *
 * 입출력 예
 * prices = [1, 2, 3, 2, 3] => result = [4, 3, 1, 1, 0]
 */

function solution(prices) {
  return prices.map((el, i) => {
    let num = 0;
    for (let j = i + 1; j < prices.length; j++) {
      num++;
      if (el > prices[j]) break;
    }
    return num;
  });
}
