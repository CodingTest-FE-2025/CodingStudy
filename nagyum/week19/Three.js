// 시간 초과 남 삼중 for 문 돌리니까 그럼 조합으로 접근

// function solution(number) {
//     var answer = 0;
//     for(let i =0; i < number.length-2; i++){
//         for(let j = i+1; j < number.length-1; j++){
//             for(let k = j+1; k < number.length; k++){
//                   const sum = number[i] + number[j] + number[k]
//                 if(sum === 0) answer++
//             }
//         }
//     }
//     return answer;
// }

function solution(arr) {
  const combination = (items, idx, k, list, result) => {
    if (items.length === k) {
      result.push(items);
      return;
    }

    for (let i = idx; i < list.length; i++) {
      combination([...items, list[i]], i + 1, k, list, result);
    }
  };

  let answer = [];
  combination([], 0, 3, arr, answer);
  return answer.filter((item) => item.reduce((acc, cur) => acc + cur, 0) === 0)
    .length;
}
