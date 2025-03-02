function solution(phone_book) {
  const phoneSet = new Set(phone_book);

  for (const phone of phone_book) {
    for (let i = 1; i < phone.length; i++) {
      const prefix = phone.slice(0, i);
      if (phoneSet.has(prefix)) {
        return false;
      }
    }
  }

  return true;
}

console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123", "456", "789"]));
console.log(solution(["12", "123", "1235", "567", "88"]));
