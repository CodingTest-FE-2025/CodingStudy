/** 가운데 글자 가져오기
짝수 홀수 인 경우 나눴는데 삼항연산자로 풀면 더 쉬울듯
 */

function solution(s) {
    var answer = '';
    if(s.length%2===0){
        answer=s[s.length/2 -1]+s[s.length/2];
        return answer;
    }
    else{
        answer=s[Math.floor(s.length /2)];
        return answer;
    }

}