// 시간 초과
// function solution(players, callings) {
//   for (let i = 0; i < callings.length; i++) {
//     const name = callings[i];
//     const idx = players.indexOf(name);

//     if (idx > 0) {
//       const loser = players[idx - 1];
//       players[idx - 1] = players[idx];
//       players[idx] = loser;
//     }
//   }

//   return players;
// }

function solution(players, callings) {
  const indexMap = {};
  for (let i = 0; i < players.length; i++) {
    indexMap[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    const name = callings[i];
    const idx = indexMap[name];
    const frontName = players[idx - 1];

    players[idx - 1] = name;
    players[idx] = frontName;

    indexMap[name] = idx - 1;
    indexMap[frontName] = idx;
  }

  return players;
}
