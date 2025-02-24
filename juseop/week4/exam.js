/**
 * 모의고사
 * 수포자 3명이서 1번문제부터 마지막 문제까지 전부 찍는다
 * 1번문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어진다.
 * 가장 많이 문제를 맞힌 사람이 누구인지 배열에 담아 retrun하라.
 * 시험은 최대 10,000문제이다.
 * 문제의 정답은 1,2,3,4,5 중 하나이다.
 * 가장 높은 점수를 받은 사람이 여럿일 경우 retrun 하는 값을 오름차순으로 정렬
 *  
 */
function solution(answers) {
    const supoja1 = [1, 2, 3, 4, 5];
    const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    //수포자들은 특정 패턴으로 답을 찍음. 각 배열은 수포자들이 반복해서 찍는 정답 패턴
    let supoja1Score = 0;
    let supoja2Score = 0;
    let supoja3Score = 0;
    //각 수포자의 점수를 저장할 변수 초기화
    for (let i = 0; i < answers.length; i++) {
        //정답 배열과 수포자들의 정답 패턴을 비교하여 점수 계산
        if (answers[i] === supoja1[i % supoja1.length]) {
            supoja1Score++;//정답과 비교해서 맞으면 수포자의 점수 증가
        }
        if (answers[i] === supoja2[i % supoja2.length]) {
            supoja2Score++;
        }
        if (answers[i] === supoja3[i % supoja3.length]) {
            supoja3Score++;
        }
    }
    const maxScore = Math.max(supoja1Score, supoja2Score, supoja3Score);
    //math.max를 사용해서 가장 높은 점수를 계산
    const result = [];
    if (supoja1Score === maxScore) result.push(1);
    if (supoja2Score === maxScore) result.push(2);
    if (supoja3Score === maxScore) result.push(3); 
    return result;
}
//틀림