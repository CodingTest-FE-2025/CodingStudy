/**
 * 소수찾기
 * 한자리 숫자가 적힌 종이 조각이 흩어져있다.
 * 흩어진 종이 조각을 붙여 소수를 몇개 만들 수 있는지 알아낸다.
 * 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 
 * 종이 조각으로 만들 수있는 소수가 몇개인지 return하게 하라.
 * 제한사항
 * numbers는 길이 1이상 7 이하인 문자열이다.
 * numbers는 0~9까지 숫자만으로 이루어져 있다.
 * "013"은 0,1,3 숫자가 적힌 종이 조각이 흩어져있다는 의미.
 * 입출력 예
 * numbers "17"일때 return 은 3
 * numbers "011" 일때 return은 2
 * 
 */
// function solution(numbers){
//     const nums =numbers.split("").sort((a,b)=> b-a);//내림차순 정렬
//     const max = parseInt(nums.join(""));// 만들어질 수 있는 가장 큰수
//     let count = 0;

//     for(let i=parseInt(nums[nums.length -1]); i <max; i++){ // 최솟값 부터 최댓값까지 1씩 증가
//         const tempNum = nums.map((n)=> n); 
//         const idx = tempNum.indexOf(nums);
//         if(idx !== -1) tempNum.splice(idx, 1);//해당숫자가 num에 존재하면 index 반환, 없으면 -1반환
//         // 존재하면 tempNum배열의 해당 인덱스의 숫자를 제거(splice)
//         return idx !== -1; // 존재 여부를 반환 => 최종적으로, 모든 숫자가 존재하는지를 확인(every)
//     };
//     if (numbers && indexedDB(i)) count++;
//     return count;
// }
// 생각을 해봤지만 답이 안나오길래 찾아봄.
// 순열을 사용하여 재귀함수로 나타내서 사용
function solution(numbers){
    let answer = 0;

    const n = numbers.split(""); // 문자열을 배열로 변환
    const nums = new Set(); // 중복 제거를 위한 Set 사용

    //소수 판별 함수
    const isPrime = (num)=>{
        if(num < 2) return false;
        for(let i =2; i * i <= num; i++){
            if (num % i === 0) return false;
        }
        return true;
    };
    //조합 생성 함수
    const combination = (a , s)=>{
        if(s.length > 0){
            const num = Number(s);
            if (!nums.has(num)) { //중복 검사
                nums.add(num);
                if(isPrime(num)) answer++;
            }
        }
        if (a.length > 0) {
            for (let i=0; i<a.length; i++){
                const t = [...a]; //원본배열유지
                t.splice(i, 1);//i 번째 요소 제거
                combination(t, s + a[i]);// 새로운 조합 생성
            }
        }
    };
    combination(n, "");//백트래킹 실행
    return answer;
}