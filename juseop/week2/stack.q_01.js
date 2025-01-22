
function solution(arr) {
    var answer = [arr[0]];

    for (let i=1; i<arr.length; i++) {
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}
// arr의 원소는 각 0부터 9까지
// 연속적으로 나타나는 숫자는 하나만 남기고 나머진 삭제 
// arr에서 a와 b를 비교해서 a,b가 같으면 b 삭제 다르면 남겨둠 a,b,c 비교 b다르면 남겨둠 같으면 b,c삭제
// 결과를 저장할 answer배열을 생성
// for문을 사용하여 배열의 원소들을 살펴보고 answer 배열이 비어 있거나(answer.lenght===0), 마지막 원소 (answer[answer.length -1]가 현재원소 arr[i]와 다를 경우 arr[i]를 answer에 추가)
//answer 배열 반환 중복제거된