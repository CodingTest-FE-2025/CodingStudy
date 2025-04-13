function solution(price, money, count) {
  let AllPrice = 0;

  for (let i = 1; i <= count; i++) {
    AllPrice = AllPrice + price * i;
  }

  if (money - AllPrice >= 0) {
    return 0;
  } else {
    return AllPrice - money;
  }
}

console.log(solution(3, 20, 4)); //10
