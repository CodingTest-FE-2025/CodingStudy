/** 
 * n개의 음이 아닌 정수들이 있다. 이 정수들은 순서를 바꾸지 않고 적절히 더하거나
 * 빼서 타겟 넘버를 만들려고 한다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들기
 * 위해서는 다음 다섯 방법을 쓸 수 있다.
 *  -1+1+1+1+1 = 3
    +1-1+1+1+1 = 3
    +1+1-1+1+1 = 3
    +1+1+1-1+1 = 3
    +1+1+1+1-1 = 3
    사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때
    숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성하라.
*/
/**
 * 예제
 *  numbers = [4,1,2,1] target = 4 return 3
 * 4+1-2+1 = 4
 * 4-1+2-1 = 4
 */
// 1. DFS를 이용하여 풀면 될 것 같은데..
// 2. DFS를 이용하여 모든 경우의 수를 구하고, target과 같은 경우를 카운트하여 리턴한다.

function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0); // dfs 탐색 시작
  function dfs(index, sum) {
    //배열의 끝까지 탐색한 경우
    if (index === numbers.length) {
      if (sum === target) {
        answer++; // 타겟 넘버를 만들었을 경우 카운트 증가
      }
      return;
    }
    dfs(index + 1, sum + numbers[index]); // 현재 숫자를 더하는 경우
    dfs(index + 1, sum - numbers[index]); // 현재 숫자를 빼는 경우
  }
  return answer;
}
//1. solution(numbers, target)함수가 실행되면 0으로 초기화.
//2. dfs(0, 0)함수를 실행한다.
//3. dfs함수는 index와 sum을 매개변수로 받는다.
//4. index가 numbers.length와 같아지면(모든 숫자를 사용한 경우) sum과 target이 같은지 확인한다.
//5. 같다면 answer를 증가시킨다. 같지 않다면 return한다.
//7. 같지 않다면 dfs(index+1, sum+numbers[index])를 실행한다.
//8. 같지 않다면 dfs(index+1, sum-numbers[index])를 실행한다.
//9. dfs함수가 종료되면 answer를 리턴한다.
