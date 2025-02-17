/**
 * 단어뒤집기
 * 1. 문자열 S가 주어 졌을 때 알파벳 소문자, 숫자, 공백, 특수문자로만 이루어져 있다.
 * 2. 문자열의 시작과 끝은 공백이 아니다.
 * 3. <와 > 문자열에 있는 경우 번갈아가면서 등장하며, '<'이 먼저 등장한다. 두 문자의 개수는 같다.
 *  태그는 '<'로 시작해서 '>'로 끝나는 길이가 3 이상인 부분 문자열이고, 
 * '<'와 '>' 사이에는 알파벳 소문자와 공백만 있다. 
 * 단어는 알파벳 소문자와 숫자로 이루어진 부분 문자열이고, 
 * 연속하는 두 단어는 공백 하나로 구분한다. 태그는 단어가 아니며,
 * 태그와 단어 사이에는 공백이 없다.
 * 
 * 입력: 첫째 줄에 문자열 S가 주어진다. S의 길이는 100,000이하.
 * 출력: 첫째 줄에 문자열 S의 단어를 뒤집어서 출력한다.
 */

// function solution(S){
//     let result = "";
//     let tempWorld = "";
//     let isTag = false;
    
//     for(let a of S){
//         if(a === "<"){
//             if(tempWorld){
//                 result+=tempWorld.split("").reverse().join("");
//                 tempWorld = "";
//             }
//             isTag= true;
//             result+=a;
//         } else if(a==">"){
//             isTag = false;
//             result += a;
//         } else if (isTag){
//             result +=a;
//         }else if (char === ""){
//             result += tempWorld.split("").reverse().join("")+ " ";
//             tempWorld = "";
//         }else{
//             tempWorld+=a;
//         }
//     }
//     if(tempWorld){
//         result+=tempWorld.split("").reverse().join('');
//     }
//     return result;
// }

const fs = require('fs');

// 함수 구현
function solution(S) {
    let result = "";
    let tempWord = ""; // 단어를 저장할 변수
    let isTag = false; // 태그인지 여부를 확인하는 변수

    for (let chart of S) {
        if (chart === "<") {
            // 태그 시작: 현재까지 저장된 단어를 뒤집어서 추가
            if (tempWord) {
                result += tempWord.split("").reverse().join("");
                tempWord = "";
            }
            isTag = true;
            result += word; // '<' 추가
        } else if (chart === ">") {
            // 태그 종료
            isTag = false;
            result += word; // '>' 추가
        } else if (isTag) {
            // 태그 내부
            result += word;
        } else if (chart === " ") {
            // 공백 처리: 단어를 뒤집어서 추가하고 공백 추가
            result += tempWord.split("").reverse().join("") + " ";
            tempWord = "";
        } else {
            // 단어를 구성하는 문자
            tempWord += chart;
        }
    }

    // 마지막 남은 단어 처리
    if (tempWord) {
        result += tempWord.split("").reverse().join("");
    }

    return result;
}

// 입력 처리
const input = fs.readFileSync('/dev/stdin').toString().trim();
console.log(solution(input));