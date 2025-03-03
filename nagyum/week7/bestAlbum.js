function solution(genres, plays) {
  const genreMap = new Map();

  // 1. 장르별 총 재생 횟수 및 곡 정보 저장
  genres.forEach((genre, index) => {
    if (!genreMap.has(genre)) {
      genreMap.set(genre, { totalPlays: 0, songs: [] });
    }
    genreMap.get(genre).totalPlays += plays[index];
    genreMap.get(genre).songs.push({ index, plays: plays[index] });
  });

  // 2. 장르별 재생 횟수 기준으로 내림차순 정렬
  const sortedGenres = [...genreMap.entries()].sort(
    (a, b) => b[1].totalPlays - a[1].totalPlays
  );

  const answer = [];

  // 3. 각 장르 내에서 재생 횟수 기준 정렬 후 최대 2곡 선택
  sortedGenres.forEach(([genre, data]) => {
    const sortedSongs = data.songs
      .sort((a, b) => b.plays - a.plays || a.index - b.index)
      .slice(0, 2); // 최대 2곡 선택

    sortedSongs.forEach((song) => answer.push(song.index));
  });

  return answer;
}
