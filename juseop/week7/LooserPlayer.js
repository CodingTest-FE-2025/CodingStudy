/**
 * 마라톤에 참여한 선수들의 이름이 담긴 배열 paricipant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
 * 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성하시오.
 *
 * 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하
 * completion의 길이는 participant의 길이보다 1 작다.
 * 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있다.
 * 참가자 중에는 동명이인이 있을수도 있다.
 */

/**
 * participant = ["leo", "kiki", "eden"]
 * completion = ["eden", "kiki"] 일때 return "leo"이다.
 *
 * participant = ["marina", "josipa", "nikola", "vinko", "filipa"]
 * completion = ["josipa", "filipa", "marina", "nikola"] 일때 return "vinko"이다.
 * participant와 completion을 비교하여 같은이름이 없는 경우를 찾아서 반환.
 */
//https://velog.io/@sean2337/JavaScript-%ED%95%B4%EC%8B%9C-%EC%A0%81%EC%9A%A9-%EB%B0%A9%EB%B2%95 해시적용방법
function solution(paricipant, completion) {
  const map = new Map(); //Map객체 생성
  for (let i = 0; i < paricipant.length; i++) {
    let a = paricipant[i]; //참가자 이름
    let b = completion[i]; //완주자 이름

    map.set(a, (map.get(a) || 0) + 1); // 참가자 등록(기본값 0+1)
    map.set(b, (map.get(b) || 0) - 1); // 완주자는 개수 -1
  }
  // 완주하지 못한 선수 찾기
  for (let [key, value] of map) {
    //map의 key와 value를 순회
    if (value > 0) {
      //value가 0보다 크면
      return key; //key값 반환
    }
  }
}
//혼자서 생각을 한 부분은 let a와 b를 선언하는거까지는 생각을 하였는데 그 다음부분이 도저히 생각이 나지 않음.
//그래서 구글링을 하여 내가 생각한 부분과 그다음으로 이어지는 부분인 답을 찾아냄.
//https://khys.tistory.com/41
