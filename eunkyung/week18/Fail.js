function solution(N, stages) {
  const stageCounts = new Array(N + 2).fill(0);
  stages.forEach((stage) => stageCounts[stage]++);

  const result = [];
  let totalPlayers = stages.length;

  for (let stage = 1; stage <= N; stage++) {
    const current = stageCounts[stage];

    let failRate = 0;
    if (totalPlayers > 0) {
      failRate = current / totalPlayers;
    }

    result.push({ stage, failRate });

    totalPlayers -= current;
  }

  result.sort((a, b) => {
    if (b.failRate === a.failRate) return a.stage - b.stage;
    return b.failRate - a.failRate;
  });

  return result.map((el) => el.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
