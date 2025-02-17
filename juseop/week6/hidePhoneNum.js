/**
 * 핸드폰 번호 가리기
 * 전화번호가 문자열 phone_number로 주어졌을 때,
 * 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수를 완성하라.
 * 
 * phone_number는 길이 4이상, 20이하인 문자열이다.
 */


function solution(phone_number){
    let answer = '';
    let arr = [];
    let lens= phone_number.length; //폰넘버의 길이를 저장.
    
    for(let i=0; i<lens; i++){
        if(i < lens-4){
            arr.push("*") //마지막 4자리가 아닐경우 *추가.
        } else{
            arr.push(phone_number[i]); // 마지막4자리는 그대로 추가.
        }
    }

    answer = arr.join("");
    return answer;
}

/**
 * 마지막 4자리 전까지 *추가 하고
 * 아니면 마지막 4자리는 그대로 추가
 * 후에 문자열로 변환하여 반환.
 * 핸드폰 번호를 돌면서 번호 길이를 통해 마지막 네자리이면 * 아니면 숫자를 출력.
 */