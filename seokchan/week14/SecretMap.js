/*
arr1,arr2를 순서대로 꺼냄
2진수 문자열로 변환하고 자리수를 n개로 맞춤
이중 for문으로 문자열을 한글자씩 검사
1이면 # 0이면 공백
*/

function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    const line = (arr1[i] | arr2[i]).toString(2).padStart(n, "0");
    let row = "";

    for (let char of line) {
      if (char === "1") {
        row += "#";
      } else {
        row += " ";
      }
    }

    answer.push(row);
  }

  return answer;
}
