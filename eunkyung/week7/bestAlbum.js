function solution(genres, plays) {
  var answer = [];
  let countHash = {};
  let hash = {};

  for (let i = 0; i < genres.length; i++) {
    countHash[genres[i]] = (countHash[genres[i]] || 0) + plays[i];
    hash[genres[i]] = hash[genres[i]] || [];
    hash[genres[i]].push({ [i]: plays[i] });
  }
  // console.log(countHash); //{ classic: 1450, pop: 3100 }

  const sorted = Object.entries(countHash).sort((a, b) => b[1] - a[1]);
  // console.log(sorted); //[ [ 'pop', 3100 ], [ 'classic', 1450 ] ]
  // console.log(hash);
  //{
  //  classic: [ { '0': 500 }, { '2': 150 }, { '3': 800 } ],
  //  pop: [ { '1': 600 }, { '4': 2500 } ]
  //}

  const resultHash = Object.keys(hash).reduce((acc, genre) => {
    const sorted = hash[genre].sort(
      (a, b) => Object.values(b)[0] - Object.values(a)[0]
    );
    const topKeys = sorted.slice(0, 2).map((item) => Object.keys(item)[0]);
    acc[genre] = topKeys;
    return acc;
  }, {});

  for (let value of sorted) {
    answer = [...answer, ...resultHash[value[0]]];
  }

  return answer.map(Number);
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
); //[4, 1, 3, 0]
