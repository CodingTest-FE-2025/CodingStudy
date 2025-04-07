// cola 누적 콜라수
// bottle 현재 보유 빈병
// get 이번 반복을 통해 얻는 콜라수

function solution(a, b, n) {
  let cola = 0;
  let bottle = n;

  for (let i = 0; bottle >= a; i++) {
    const get = Math.floor(bottle / a) * b;
    cola += get;
    bottle = Math.floor(bottle / a) * b + (bottle % a);
  }

  return cola;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
