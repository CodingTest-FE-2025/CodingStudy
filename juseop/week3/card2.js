/**
 * 카드2
 * 1. N장의 카드가 있다. 각각의 카드는 차례로 1부터 N까지의 번호가 붙어 있으며
 * 1번 카드가 제일 위에, N번 카드가 제일 아래인 상태
 * 이 1번부터 N번까지 있는 카드 뭉치에서 제일 첫번째 카드는 버리고 두번째 카드는 제일 마지막으로 옮긴다. \
 * 이것을 한장 남을 때 까지 반복
 * ex) N=6일때 1,2,3,4,5,6이 있고 1을 버리면 2,3,4,5,6에서 3,4,5,6,2가 된다.
 * 3,4,5,6,2일 때 3을 버리고 4,5,6,2가 남는다. 4를 제일뒤로 5,6,2,4가 된다.
 * 5,6,2,4,일 때 5를 버리고 6,2,4가 남는다. 6을 제일 뒤로 보내면 2,4,6이 된다.
 * 2,4,6 일 때 2를 버리고 4,6이 남는다. 4를 제일 뒤로 보내면 6,4가 된다.
 * 6,4일 때 6을 버리고 4가 남는다. 여기서 프로그램은 끝이난다.
 */

// function solution(N){
//     const que=[];//배열
//     for(let i=1; i<=N; i++){
//         que.push(i);//1부터 N까지 숫자를 큐에 추가.
//     }
//     while(que.length>1){
//         que.shift();//첫번째 카드 제거
//         const topCard = que.shift();//두번째 카드를 꺼내서
//         que.push(topCard)//큐의 끝에 다시 추가
//     }
//     return que[0];//남은 카드 반환
// }
// 자바스크립트로 우선 풀고 node.js로 변환하는 것을 찾음

// const fs = require("fs");

// // 입력 처리
// const input = fs.readFileSync("/dev/stdin").toString().trim();
// const N = parseInt(input, 10);

// // 함수 정의
// function solution(N) {
//     const que = []; // 큐를 배열로 구현

//     // 1부터 N까지 큐에 추가
//     for (let i = 1; i <= N; i++) {
//         que.push(i);
//     }

//     // 큐에서 카드 제거 및 이동 반복
//     while (que.length > 1) {
//         que.shift(); // 첫 번째 카드 제거
//         const topCard = que.shift(); // 두 번째 카드를 꺼내서
//         que.push(topCard); // 큐 끝에 다시 추가
//     }

//     return que[0]; // 남은 카드 반환
// }

// // 결과 출력
// console.log(solution(N));
//하지만 시간초과가 계속 떠서 결국 다른 방법이 있나 찾아봄.

const fs = require("fs");

// 입력 처리
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input, 10);

// 함수 정의
function solution(N) {
    const que = []; // 큐를 배열로 구현
    let front = 0; // 큐의 시작 위치를 추적 (덱 구조)

    // 1부터 N까지 큐에 추가
    for (let i = 1; i <= N; i++) {
        que.push(i);
    }

    // 큐에서 카드 제거 및 이동 반복
    while (que.length - front > 1) {
        front++; // 첫 번째 카드 제거 (실제 제거 대신 인덱스 이동)
        que.push(que[front]); // 두 번째 카드를 끝에 추가
        front++; // 두 번째 카드 제거 (인덱스 이동)
    }

    return que[front]; // 남은 카드 반환
}

// 결과 출력
console.log(solution(N));
/**
 * 찾아보니 front 변수를 사용해
 * 배열을 직접 수정하지않고 시작위치만 추적함.
 *  
 * 
 * 
 * */ 

