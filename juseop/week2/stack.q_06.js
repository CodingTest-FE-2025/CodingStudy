/**
 * 문제이해
 * 1. map메서드를 사용하여 첫번째 자리에 있는 것 부터 남은 것들을 하나씩 비교함.
 * 2. 처음 자리에 있는 가격과 다음 가격들을 하나씩 비교하여 떨어지기 직전의 시간 초를 구함.
 * ex) [1,2,3,4,5]의 가격이 있을 때 1은 4, 2는 3, 3은 2, 4는 1 5는 0초가 나온다.
 * 배열에 담으면 [4,3,2,1,0]을 리턴
 */

//내가 푼 정답.
// function solution(prices) {
//    return prices.map((el,i)=>{ prices 배열을 순회하며 새로운 배열을 만듦 
//         let num = 0; // 가격이 떨어지지 않은 시간을 저장할 변수 초기화
//         for (let j=i+1; j<prices.length; j++){ //i+1부터 배열 끝까지 반복
//            num++; // 비교한 초 추가
//            if(el> prices[j]){ //현재 가격보다 작은 가격이 나타나면 
//             break// 반복문 종료
//            }
//         }
//         return num;// 현재 가격이 떨어지지 않은 시간을 반환
//     });
// }
// 스택큐로 풀어야하는데 스택큐로 풀리지 않아서 한번 찾아봤음.
//찾아본 답
function solution(prices) {
    const n = prices.length;
    const answer = Array(n).fill(0); // 결과 배열 초기화
    const stack = []; // 스택 선언

    for (let i = 0; i < n; i++) {
        // 스택이 비어있지 않고 현재 가격이 스택에 저장된 가격보다 작으면 처리
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const j = stack.pop(); // 스택에서 인덱스 꺼내기
            answer[j] = i - j; // 떨어지지 않은 시간 계산
        }
        stack.push(i); // 현재 인덱스 스택에 추가
    }

    // 스택에 남아있는 값 처리 (끝까지 가격이 떨어지지 않은 경우)
    while (stack.length > 0) {
        const j = stack.pop();
        answer[j] = n - j - 1;
    }

    return answer;
}