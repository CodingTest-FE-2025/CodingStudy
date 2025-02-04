/**
 * 카펫
 * 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자모양
 * 갈색격자의 수 brown, 노란색 격자의 수 yellow가 매개변수
 * 카펫의 가로 세로 크기를 순서대로 배열에 담아 return
 * 제한사항
 * 갈색 격자의 수 brown은 8 이상 5,000이하 자연수
 * 노란색 격자의 수 yellow는 1이상 2,000,000이하 자연수
 * 카펫의 가로 길이는 세로 길이와 같거나 세로 길이보다 길다.
 * (가로길이는 세로길이보다 작을 순 없다.)
 * 입출력
 * brown이 10이고 yellow가 2일경우 return은 [4,3]이고
 * brown이 8이고 yellow가 1일경우 return은 [3,3]이다.
 * brown이 24이고 yellow가 24일 경우 return은 [8,6]이다.
 * 
 */

function solution(brown, yellow) {
    let carpet= [];
    //height 와 width 최소 값은 3이다.
    for(let height = 3; height <= (brown+yellow) / height; height++){
        //width = (brown+yellow) / height
        let width = Math.floor((brown + yellow)/height);//전체 칸 수에서 세로 길이로 나누어 가로길이를 구함.
        if((width-2)*(height-2) === yellow) {//안쪽 노란색 부분의 크기가 yellow와 같은지 확인
            carpet.push(width);
            carpet.push(height);
            break;
        } 
    }
    return carpet;
}
//사각형의 크기는 가로 X세로를 이용해서 풀었음.
//brown+yellow는 전체 카펫의 면적을 나타냄.