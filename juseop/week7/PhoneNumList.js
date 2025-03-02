/**
 * 전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인
 * 전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사.
 * 구조대: 119
 * 박준영: 97 674 223
 * 지영석: 11 9552 4421
 * 전화번호부에 적힌 전화번호를 담은 배열 phone_book이 solution 함수의 매개변수로 주어질 때,
 * 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false 그렇지 않으면 true를 리턴
 */

/**
 * 내가 이해한 것이 전화번호들이 적혀있는 전화번호 부에서 정렬을 시키고 제일 앞 전화번호가 다음번의 전화번호의 접두어 인지 확인하는거..?
 */
function solution(phone_book) {
  phone_book.sort(); //전화번호 부 정렬
  //전화번호부 를 순회하면서 전화번호를 확인하고 다음번호와 비교하였을 때 접두어가 있는지 확인
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i] === phone_book[i + 1].slice(0, phone_book[i].length)) {
      //phone_book[i]와 phone_book[i+1]의 앞부분(0부터 phone_book[i].length)이 같으면, 접두어 관계
      return false;
    }
  }
  return true;
}
//루프 조건에서 i<phone_book.length-1을 하는 이유는 phone_book[i+1]을 비교하기 때문에 마지막 번호는 비교할 필요가 없다.
//slice(0, phone_book[i].length)은 다음 전화번호의 앞부분을 현재 전화번호 길이만큼 잘라서 가져온다. 다음 전화번호의 앞부분이 현재 전화번호와 같은지 비교하는 역할.
