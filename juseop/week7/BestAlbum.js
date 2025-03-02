/**
 * 스트리밍 사이트에서 장르별로 가장 많이 재생된 노래를 두개씩 모아 베스트 앨범을 출시
 * 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같다.
 * 1. 속한 노래가 많이 재생된 장르를 먼저 수록
 * 2. 장르 내에서 많이 재생된 노래를 먼저 수록
 * 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록
 * 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때,
 * 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return.
 */
function solution(genres, plays) {
  const answer = [];

  // 노래를 구분하기 위한 배열을 만들어 준다.
  let songs = genres.map((genre, idx) => {
    return {
      no: idx,
      genre: genre,
      play: plays[idx],
    };
  });

  // 장르별 재생횟수를 위한 새로운 배열을 만들어 준다.
  let genrePlayCnt = [];
  songs.forEach((song) => {
    let thisGenre = genrePlayCnt.find((a) => a.genre === song.genre);
    if (thisGenre) {
      thisGenre.play += song.play;
    } else {
      genrePlayCnt.push({
        genre: song.genre,
        play: song.play,
      });
    }
  });

  // 재생횟수가 많은 순으로 노래를 정렬한다.
  songs.sort((a, b) => b.play - a.play);
  // 재생횟수가 많은 순으로 장르를 정렬한다.
  genrePlayCnt.sort((a, b) => b.play - a.play);

  // 장르를 기준으로 배열을 돌면서 노래를 두 개 씩 넣는다.
  genrePlayCnt.forEach((a) => {
    let len = 0;
    songs.forEach((song) => {
      if (a.genre === song.genre && len < 2) {
        len++;
        answer.push(song.no);
      }
    });
  });
  return answer;
}

//도저히 문제 못 풀겠어서 일단 구글링을 통해 해시를 사용한 방법 중 이해가 어느 정도 되는걸 챙겨옴
//난중에 이건 다시 풀어봐야겠음.
