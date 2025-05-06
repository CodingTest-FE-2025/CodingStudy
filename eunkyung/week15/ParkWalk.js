function solution(park, routes) {
  const walk = { N: [-1, 0], E: [0, 1], S: [1, 0], W: [0, -1] };
  let start = [0, 0];

  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      start[0] = i;
      start[1] = park[i].indexOf("S");
    }
  }

  routes.forEach((value) => {
    const [dir, countStr] = value.split(" ");
    const direction = walk[dir];
    const count = parseInt(countStr);
    let temp = [...start];
    let isBlocked = false;

    for (let i = 0; i < count; i++) {
      temp = temp.map((val, idx) => val + direction[idx]);
      if (
        temp[0] < 0 ||
        temp[0] >= park.length ||
        temp[1] < 0 ||
        temp[1] >= park[0].length ||
        park[temp[0]][temp[1]] === "X"
      ) {
        isBlocked = true;
        break;
      }
    }

    if (!isBlocked) {
      start = temp;
    }
  });

  return start;
}
