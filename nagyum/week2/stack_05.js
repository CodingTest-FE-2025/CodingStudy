/*
다리를 지나는 트럭

다리에 올라갈 수 있는 최대무게, 최대갯수가 정해져있음 ( 완전히 오른 경우만 )

bridge.length = 트럭의 수
weight= 최대 무게


 */

function solution(bridge_length, weight, truck_weights) {
  var time = 0;
  let bridge = Array(bridge_length).fill(0);

  while (bridge.length) {
    time++;
    bridge.shift();

    if (truck_weights.length) {
      let sum = bridge.reduce((previous, current) => previous + current, 0);
      if (sum + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
  }
  return time;
}
