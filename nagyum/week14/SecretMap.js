/* 비밀지도
전체 지도 = 지도 1 OR 지도 2
n, arr1, arr2가 입력으로 들어오고
n 정수, 배열들도 정수 배열로 주어짐
배열들의 같은 인덱스를 이진수로 변경하고 이진수끼지 or 연산 
*/

function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    //이진법으로 바꾸고 연결된 문자열이니까 비교할려면 split
    const binary1 = arr1[i].toString(2).padStart(n, "0");
    const binary2 = arr2[i].toString(2).padStart(n, "0");
    //앞이 0 이면 제대로 비교 못하니까 길이맞게 0 추가
    // 꼭 하나씩 안해도 문자끼리 비교되네
    // if (binary1.length < n) {
    //   while (binary1.length < n) binary1.unshift("0");
    // }
    // if (binary2.length < n) {
    //   while (binary2.length < n) binary2.unshift("0");
    // }
    let row = "";
    for (let j = 0; j < n; j++) {
      row += binary1[j] === "1" || binary2[j] === "1" ? "#" : " ";
    }
    answer.push(row);
  }

  return answer;
}
