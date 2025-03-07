function solution(genres, plays) {
  // 1. 각 장르의 총 재생 횟수와 각 장르별 노래 정보를 저장할 Map 생성
  const genreTotal = new Map();
  const genreSongs = new Map();

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!genreTotal.has(genre)) {
      genreTotal.set(genre, 0);
      genreSongs.set(genre, []);
    }
    // 해당 장르의 총 재생 횟수 업데이트
    genreTotal.set(genre, genreTotal.get(genre) + play);
    // 각 노래 정보 저장 (고유번호(index)와 재생 횟수)
    genreSongs.get(genre).push({ index: i, plays: play });
  }

  // 2. 총 재생 횟수를 기준으로 장르를 내림차순 정렬
  const sortedGenres = Array.from(genreTotal.entries())
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0]);

  const answer = [];

  // 3. 각 장르별로 노래들을 재생 횟수 내림차순, 재생 횟수가 같으면 고유번호 오름차순 정렬한 후 상위 2개 선택
  for (const genre of sortedGenres) {
    const songs = genreSongs.get(genre);
    songs.sort((a, b) => {
      if (b.plays === a.plays) {
        return a.index - b.index;
      }
      return b.plays - a.plays;
    });
    answer.push(songs[0].index);
    if (songs.length > 1) {
      answer.push(songs[1].index);
    }
  }

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
