/**
 * 1. 다리의 특징:
 * 길이 : bridge_length로 주어지며, 다리에 올라갈 수 있는 트럭의 최대 개수를 의미한다.
 * 최대무게 : weight로 주어지며, 다리가 견딜 수 있는 트럭들의 최대 총 무게를 의미한다.
 * 2. 트럭의 특징
 * truck_weights 배열로 주어지며, 각 트럭의 무게를 나타낸다.
 * 트럭은 주어진 순서대로 다리를 건너야 한다.
 * 3. 트럭 이동 규칙
 * 트럭이 다리에 올라가기 위해서는 다리에 빈 자리가 있어야하고, 현재 다리에 있는 트럭들의 총 무게가 다리의 최대 무게를 초과하지 않아야한다.
 * 트럭은 매초마다 다리 위에서 한 칸씩 앞으로 이동하며, 다리 끝에 도달하면 다리를 완전히 건넌 것으로 간주.
 */

function solution (bridge_length, weight, truck_weights){
    let time = 0; // 경과시간
    let bridge = Array(bridge_length).fill(0);// 다리상태(다리 길이만큼 0으로 초기화)
    let bridge_weight= 0; // 다리위 트럭의 총 무게

    while(truck_weights.length > 0 || bridge_weight>0){
        time ++;//1초 경과

        bridge_weight -=bridge.shift();
        //다리에서 트럭 한대 내리기(시간지나면 맨 앞 트럭은 나감)
        
        //대기 트럭이 다리에 올라갈 수 있는지 확인
        if(truck_weights.length>0){
            if(bridge_weight+truck_weights[0] <= weight){
                //조건충족하면 트럭을 다리에 올림
                const nextTruck=truck_weights.shift();
                bridge.push(nextTruck);
                bridge_weight += nextTruck;
            }else{
                //조건 불충족하면 트럭 대신 빈 공간 유지
                bridge.push(0);
               
            }
        }
    }
    return time;// 모든 트럭이 다리를 건너는데 걸린 시간
}

/**
 * 코드설명
 */