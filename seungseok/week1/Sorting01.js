// https://school.programmers.co.kr/learn/courses/30/lessons/42748

/*
<!- 생각한 방법 ->
1. commands 배열을 map사용해서 반복
2. array에 시작점 끝점 정하고 slice로 자르고 sort로 정렬
3. n번째 숫자 리턴
4. map사용으로 만들어진 배열 리턴
*/

function solution(array, commands) {
  return commands.map(([x, y, z]) => {
    let ary = array.slice(x - 1, y).sort((a, b) => a - b);
    return ary[z - 1];
  });
}

/*
<!- 찾아본 내용 ->
slice 생각한대로 안돼서 방법 찾아봄.
이상하게 0번째부터 시작 마지막 전까지임.. 
*/
