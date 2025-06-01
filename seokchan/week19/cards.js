function solution(cards1, cards2, goal) {
  let answer = "";
  let i = 0;
  let j = 0;

  for (let word of goal) {
    if (cards1[i] === word) {
      i++;
    } else if (cards2[j] === word) {
      j++;
    } else {
      return (answer = "No");
    }
  }

  return (answer = "Yes");
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
