function solution(s) {
  let x = 0,
    y = 0;
  let string = s.toUpperCase().split("");

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "P") {
      x++;
    } else if (string[i] === "Y") {
      y++;
    }
  }

  return x === y;
}
