/*
K번째 수

i번째 있는 수부터 j번째 있는 숫자까지 자르고 정렬했을 때, K 번째에 있는 수

sol (내 생각)
1. 배열 자르기 slice 사용=> slice(i,j): i번째 부터 j-1 번째 까지
2. 배열 sort 사용해서 정렬하기
sort는 유니코드를 기반으로 정렬해서 내림차순이나 오름차순을 위해서는
sort(a,b)=>a-b // b-a 비교함수를 전달해줘야 됨

3. 인덱스를 사용해서 k번째 수 찾기
*/

function solution(array, commands) {
  var answer = [];
  for (let x = 0; x < commands.length; x++) {
    let i = commands[x][0];
    let j = commands[x][1];
    let k = commands[x][2];

    const arr = array.slice(i - 1, j);
    arr.sort((a, b) => a - b);
    answer.push(arr[k - 1]);
  }
  return answer;
}
