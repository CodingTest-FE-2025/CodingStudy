/**
 * 직사각형 별찍기
 * 표준입력으로 두개의 정수 n과 m이 주어진다.
 * 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력.
 *
 * 제한 조건 n과 m은 각각 1000이하인 자연수이다.
 * 예시
 * 5,3
 * 출력
 *  *****
 *  *****
 *  *****
 */

// 문제에서 제시된 코드가 이해가 안되서 gpt한테 물어봄.
//표준 입력을 UTF-8 인코딩으로 설정.(입력받는 문자가 문자열로 처리)
//사용자가 입력을 하면 data 이벤트가 발생하고, 콜백 함수가 실행된다.
//입력된 문자열을 공백 기준으로 나누어 첫 번째 값을 a, 두번째 값을 b로 변환.
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const result = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(result);
  }
});

//1. *문자를 a번 반복한 문자열을 생성.
//2. 위에서 만든 문자열을 b번 줄바꿈하며 출력.
