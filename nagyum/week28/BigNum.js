/** 큰 수 만들기
 * k 수를 제거했을때 가장 큰 수를 구할려고 하면
 * sort로 정렬을 한다음 k 개만큼 작은 수 지워버리고 다시 재정렬을 하는 방법이 있나?
 */

function solution(number, k) {
  const stack = [];
  let remove = k;

  for (const ch of number) {
    while (remove > 0 && stack.length && stack[stack.length - 1] < ch) {
      stack.pop();
      remove--;
    }
    stack.push(ch);
  }

  if (remove > 0) stack.splice(stack.length - remove, remove);

  return stack.join("");
}
