function solution(participant, completion) {
  let hash = {};

  for (let name of participant) {
    hash[name] = (hash[name] || 0) + 1;
  }

  for (let name of completion) {
    hash[name] -= 1;
  }

  for (let key in hash) {
    if (hash[key] > 0) return key;
  }
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); //"mislav"
