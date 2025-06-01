function solution(n) {
  let count = 0;
  let k = 1;

  while ((k * (k - 1)) / 2 < n) {
    const temp = n - (k * (k - 1)) / 2;
    if (temp % k === 0) {
      count++;
    }
    k++;
  }

  return count;
}

// function solution(n) {
//   let count = 0;

//   for (let start = 1; start <= n; start++) {
//     let sum = 0;
//     for (let next = start; sum < n; next++) {
//       sum += next;
//       if (sum === n) {
//         count++;
//         break;
//       }
//     }
//   }

//   return count;
// }
