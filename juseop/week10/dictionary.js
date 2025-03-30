/**
 * 모음 사전
 *
 * 사전에 알파벳 모음 A, E, I, O, U만을 사용하여 만들 수 있는,
 * 길이가 5 이하인 모든 단어가 수록.
 * 사전에서 첫 번째 단어는 'A'이고, 그 다음은 'AA'마지막 단어는 'UUUUU'.
 * 단어 하나 word가 매개변수로 주어질 때,
 * 이 단어가 사전에서 몇번째 단어인지 return.
 *
 * 입출력 예
 * word = "AAAAE" => return 6
 * word = "AAAE" => return 10
 * word = "I" => return 1563
 * word = "EIO" => return 1189
 *
 * "A", "AA", "AAA", "AAAA", "AAAAA", "AAAAE", "AAAAI", "AAAAO", "AAAAU",
 * 사전의 단어는 사전식 순서로 정렬되어 있음.
 */

function solution(word) {
  const arr = ["A", "E", "I", "O", "U"]; //사용할 문자 모음
  const lengths = [781, 156, 31, 6, 1]; // 자리별 가중치(각 위치에서 가능한 조합)

  let result = word.length; // 단어의 길이 만큼 기본 위치 값 추가
  for (let i = 0; i < word.length; i++) {
    const index = arr.indexOf(word[i]); //현재 문자의 인덱스(A=0, E=1, I=2, O=3, U=4)
    result += lengths[i] * index; // 가중치를 곱해서 순서 계산
  }
  return result;
}

//1. 모음 A, E, I, O, U를 사용하여 만들 수 있는 단어를 사전식 순서로 정렬.
//2. 각 자리수마다 가능한 조합의 개수를 계산하여 가중치를 부여.
//3. 주어진 단어의 각 문자에 대해 해당 문자의 인덱스를 찾아 가중치를 곱하여 순서를 계산.
//4. 최종적으로 계산된 값을 반환.
