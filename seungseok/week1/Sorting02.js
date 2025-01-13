// https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript

/*
<!- 생각한 방법 ->
1. numbers [3, 30, 34, 5, 9] 를 [[3], [3,0], [3,4], [5], [9]]로 만든다.
2. sort를 사용해 첫번째 자리를 비교해 내림차순
3. 같다면 두번째 자리 확인 두번째자리가 없다면 있는게 높은거
4. 이런식으로 4번째 자리까지
5. 배열 전부 제거 후 문자열로 변경
*/

/*
두자리까지는 성공
그 후에 [1010, 1] 과 같이 1자리와 3자리이상에서 막힘..

function solution(numbers) {
  let ary = numbers.map((el) =>
    el
      .toString()
      .split("")
      .map((num) => Number(num))
  );
  let answer = ary.sort((a, b) => {
    for (let i = 0; i < 3; i++) {
      if (a[i] !== b[i]) {
        return b[i] - a[i];
      } else {
        let aa = a[i + 1] !== undefined ? a[i + 1] : 0;
        let bb = b[i + 1] !== undefined ? b[i + 1] : 0;
        if (aa > bb) {
          return bb - aa;
        } else {
          return aa - bb;
        }
      }
    }
  });

  return answer.flat().join("");
}

console.log(solution([3, 30, 34, 5, 9]));
*/

function solution(numbers) {
  // 숫자를 문자열로 변환 후 두 조합의 크기를 기준으로 정렬
  let answer = numbers
    .map(String)
    .sort((a, b) => b + a - (a + b)) // 조합 순서에 따라 정렬
    .join(""); // 정렬된 결과를 문자열로 합침

  // 모든 값이 "0"인 경우 "0" 반환
  return answer[0] === "0" ? "0" : answer;
}
console.log(solution([3, 30, 34, 5, 9]));

/*
  알게된점
  1. .map(String) 으로 배열을 전부 문자열로 바꾸는 방법 Number도 가능
  2. sort 사용 시 문자열로 바꿔서 조합할 수 있음
      ex) .sort((a, b) => b + a - (a + b))
      a = "3", b = "30"일 때 
      (b + a) = "303"와 (a + b) = "330"을 
      비교하여 "330"이 더 크므로 b가 앞에 온다.
  3. 0을 항상 생각해서 테스트 풀기
*/
