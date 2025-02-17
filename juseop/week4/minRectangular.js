/**
 * 최소직사각형
 * 가로 X 세로 size로 주어진다 [w, h]형식 
 * w는 명함의 가로길이
 * h는 명함의 세로길이 
 * w와 h는 1이상 1,000이하 자연수
 * 명함 가로 세로 회전 가능(가로와 세로 변형 가능)
 * 가로와 세로 중 더 큰 값을 가로에, 작은 값을 세로가 되도록
 * 명함 사이즈들을 변경 후 가로, 세로 max값을 구하면 그것이 최소 사이즈.
 */

function solution(sizes){
    let width = [];
    let height = [];
    for (let i=0; i<sizes.length; i++){
       const max = Math.max(sizes[i][0], sizes[i][1]); 
       const min = Math.min(sizes[i][0], sizes[i][1]);
       width.push(max);
       height.push(min);
    };
    return Math.max(...width) * Math.max(...height);
};

//sizes 배열의 각 요소를 확인
//가로(sizes[i][0])과 세로(sizes[i][1]) 중 더 큰값을 width 배열에 저장
// 작은 값은 heigth 배열에 저장.
// width 배열에서 가장 큰 값과 height 배열에서 가장 큰 값을 곱하여 반환.