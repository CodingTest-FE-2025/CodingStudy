/**
 * 큰 수 만들기
 * 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려한다.
 * 예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24]를 만들 수 있다.
 * 이 중 가장 큰 숫자는 94이다.
 * 문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어진다.
 * number에서 k개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return.
 *
 * 제한 조건
 * number는 2자리 이상, 1,000,000자리 이하인 숫자이다.
 * k는 1 이상 number의 자릿수 미만인 자연수이다.
 *
 * 입출력 예
 * number = "1924", k = 2 return = "94"
 * number = "1231234", k = 3 return = "3234"
 * number = "4177252841", k = 4 return = "775841"
 */

function solution(number, k) {
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    const num = number[i];
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }
  stack.splice(stack.length - k, k);
  return stack.join("");
}
