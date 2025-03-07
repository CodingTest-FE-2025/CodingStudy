function solution(phone_book) {
  let hash = new Set(phone_book);

  for (let number of phone_book) {
    for (let i = 1; i < number.length; i++) {
      if (hash.has(number.slice(0, i))) {
        return false;
      }
    }
  }

  return true;
}

console.log(solution(["123", "2345", "23467"]));
