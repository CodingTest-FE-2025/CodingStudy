/**
 * 음양 더하기
 * 어떤 정수들이 있다. 이 정수들의 절대값을 차례대로 담은 정수배열 absolutes와 이 정수들의 
 * 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어진다. 실제 정수들의 합을 구하여 return하라.
 * 
 * absolutes의 길이는 1이상 1,000이하.
 * 모든수도 1이상 1,000이하.
 * signs의 길이 absolutes의 길이와 같다.
 * signs[i] 가 참이면 absolutes[i]의 실제 정수가 양수, 그렇지 않으면 음수.
 * 
 * absolutes가 [4,7,12] signs[true,false, true]일때 result값은 9
 * 4,-7,12이기 때문에 값이 9가 나옴.
 * [1,2,3] 일떄 [false,false,ture] 일때 result값은 0
 * -1,-2,3이기 때문에 0이 나옴.
 */

function solution(absolutes,signs){
    let answer=0;
    for(let i=0; i<signs.length; i++){
        if(signs[i] === ture){ // signs가 참일 때
            answer+=absolutes[i]; //absolutes가 양수
        }else{ // 거짓이면 
            answer-=absolutes[i];//absolutes가 음수
        }
    }
    return answer;
}
// 뭔가 삼항연산자로도 풀어질 것 같음..
function solution(absolutes, signs){
    let answer=0; 
    for(let i=0; i<signs.length; i++){
        signs[i] ? answer+=absolutes[i] : answer-=absolutes[i];
    }
    return answer;
}
//오 이것도 풀림.. 대박적!

