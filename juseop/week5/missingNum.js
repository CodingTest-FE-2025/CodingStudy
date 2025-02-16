/**
 * 없는 숫자 더하기
 * 0부터 9까지 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어진다.
 * numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return하라.
 * 
 * numbers가 [1,2,3,4,6,7,8,0]일 경우 result 14 5와 9가 없어서 14
 * numbers가 [5,8,4,0,6,7,9]일 경우 6 1, 2, 3 이 없어서 6
 */

function solution(numbers){
    let answer=0;
    for(let i=0; i<=9; i++){ //0부터 9까지 숫자 확인
        if (!numbers.includes(i)){ //includes메소드를 활용하여 배열안에 숫자가 있는지 확인 후 없다면 변수에 더함.
            answer +=i
        }
    }
return answer;
}