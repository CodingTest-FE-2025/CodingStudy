/**
 * 피로도 ( 완전탐색 )
 * 일정 피로도를 사용해 던전을 탐현
 * 최소 필요 피로도 (least ) : 탐험하기 위해 최소로 가지고 있어야할것
 * 소모 피로모 (used) : 소모되는 피로도
 * 최대한 많은 탐험을 할수있는
 * 현재 피로도 :  k
 * 최소 필요 피로도, 소모 피로도 : 2차원 배열 dungeons
 *
 * sol. 
 * 던전을 돌수있는 경우의 수 만큼 돌다가 answer이 최대일때
 *
 */

function solution(k, dungeons) {
    let answer = 0
    let visited = new Array(dungeons.length).fill(false)
    
    const DFS = (hp , count) => {
        for(let i = 0 ; i < dungeons.length ; i++) {
            if(!visited[i] && hp >= dungeons[i][0]){
                visited[i] = true
                DFS(hp - dungeons[i][1] , count + 1)
                visited[i] = false
            }    
        }
        answer = Math.max(answer, count)
    }
    
    DFS(k,0)
    return answer
}
