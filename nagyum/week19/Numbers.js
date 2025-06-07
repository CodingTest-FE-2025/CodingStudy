// 시간 초과 코드
// function solution(n) {
//   var answer = 1;
//   for (let start = 1; start <= n; start++) {
//     let sum = 0;
//     for (let i = start; i < n; i++) {
//       sum += i;
//       if (sum === n) answer++;
//       if (sum >= n) break;
//     }
//   }
//   return answer;
// }

// function solution(n) {
//   let answer = 0;
//   for (let start = 1; start <= n / 2; start++) {
//     let sum = 0;
//     for (let i = start; i <= n; i++) {
//       sum += i;
//       if (sum === n) {
//         answer++;
//         break;
//       }
//       if (sum > n) break;
//     }
//   }
//   return answer + 1; // n 자체도 1개의 수로 표현 가능
// }

function solution(n) {
  let count = 0;
  for (let k = 1; (k * (k - 1)) / 2 < n; k++) {
    const a = (n - (k * (k - 1)) / 2) / k;
    if (a % 1 === 0) count++;
  }
  return count;
}
