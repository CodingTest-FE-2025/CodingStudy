/**
 * 동영상 재생기
 *
 * 동영상 재생기는 10초전으로 이동, 10초 후로 이동, 오프닝 건너뛰기 3가지 기능을 지원.
 * 각 기능이 수행하는 작업은 다음과 같다.
 *
 * -10초 전으로 이동: 사용자가 "prev" 명령을 입력할 경우 동영상의 재생 위치리를 현재 위치에서 10초 전으로 이동. 현재 위치가 10초 미만인 경우 영상의 처음 위치로 이동.
 * -10초 후로 이동: 사용자가 "next" 명령을 입력할 경우 동영상의 재생 위치를 현재 위치에서 10초 후로 이동. 동영상의 남은 시간이 10초 미만일 경우 영상의 마지막 위치로 이동. 영상의 마지막 위치는 동영상의 길이와 같다.
 * -오프닝 건너뛰기: 사용자가 "skip" 명령을 입력할 경우 현재 재생 위치가 오프닝 구간(op_start <= 현재 재생위치 <= op_end)인 경우 자동으로 오프닝이 끝나는 위치로 이동.
 *
 * 동영상의 길이를 나타내는 문자열 video_len, 기능이 수행되기 직전의 재생 위치를 나타내는 문자열 pos, 오프닝 시작 시각을 나타내는 문자열 op_start, 오프닝이 끝나는 시각을 나타내는 문자열 op_end, 사용자의 입력을 나타내는 1차원 배열 commands가 매개변수로 주어진다.
 * 이때 사용자의 입력이 모두 끝난 후 동영상의 위치를 "mm:ss" 형식으로 return
 *
 * 제한 사항
 * -video_len의 길이 = pos의 길이 = op_start의 길이 = op_end의 길이 = 5
 * -- video_len, pos, op_start, op_end는 "mm:ss" 형식으로 주어짐 mm분 ss초
 * -- 0<= mm <= 59, 0<= ss <= 59
 * -- 분, 초가 한 자리일 경우 0을 붙여 두자리로 나타낸다.
 * -- 비디오의 현재 위치 혹은 오프닝이 끝나는 시각이 동영상의 범위 밖인 경우는 주어지지 않는다.
 * -- 오프닝이 시작하는 시각은 항상 오프닝이 끝나는 시각보다 전이다.
 * - 1<= commands.length <= 100
 * -- commands의 원소는 "prev" 혹은 "next"이다.
 * -- "prev"는 10초 전으로 이동하는 명령.
 * -- "next"는 10초 후로 이동하는 명령.
 *
 */

function solution(video_len, pos, op_start, op_end, commands) {
  // 문자열을 초 단위로 변환하는 함수
  const toSeconds = (time) => {
    const [mm, ss] = time.split(":").map(Number);
    return mm * 60 + ss;
  };

  // 초 단위를 문자열로 변환하는 함수
  const toTimeString = (seconds) => {
    const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
    const ss = String(seconds % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  };

  let currentPos = toSeconds(pos);
  const videoLength = toSeconds(video_len);
  const openingStart = toSeconds(op_start);
  const openingEnd = toSeconds(op_end);

  if (currentPos >= openingStart && currentPos < openingEnd) {
    currentPos = openingEnd;
  }

  for (const command of commands) {
    if (command === "prev") {
      currentPos = Math.max(currentPos - 10, 0);
    } else if (command === "next") {
      currentPos = Math.min(currentPos + 10, videoLength);
    }

    // 오프닝 건너뛰기
    if (currentPos >= openingStart && currentPos < openingEnd) {
      currentPos = openingEnd;
    }
  }

  return toTimeString(currentPos);
}
