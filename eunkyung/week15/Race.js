function solution(players, callings) {
  const positions = {};
  players.forEach((name, index) => {
    positions[name] = index;
  });

  callings.forEach((name) => {
    const idx = positions[name];
    const prev = players[idx - 1];

    [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];

    positions[name] -= 1;
    positions[prev] += 1;
  });

  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
