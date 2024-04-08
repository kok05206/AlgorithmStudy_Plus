// 선 긋기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const [N] = input.shift(); // 선의 개수
const line = input.sort((a, b) => a[0] - b[0]); // 선분 정보. 시작점과 끝점의 배열로 구성

let answer = 0; // 선분의 길이
let start = line[0][0]; //  선분의 시작점
let end = line[0][1]; // 선분의 끝점

// 선분 선택
for (let i = 1; i < N; i++) {
  // 현재 그리고 있는 선분의 끝점보다 다음 선분의 시작점이 더 크다면
  // 현재 그리고 있는 선분을 완료하고 새로운 선분을 그린다
  if (end < line[i][0]) {
    // 이전에 선택한 선분의 길이를 선분의 길이에 더해준다
    answer += end - start;
    // 새로운 선분의 시작점 설정
    start = line[i][0];
    // 새로운 선분의 끝점을 설정
    end = line[i][1];
  } else if (line[i][0] <= end && line[i][1] >= end) {
    // 현재 그리고 있는 선분의 끝점보다 다음 선분의 끝점이 더 크거나 같다면
    // 선분 연장
    end = line[i][1];
  }
}

// 마지막 선분의 길이를 선분의 길이에 더해주고 결과 출력
answer += end - start;
console.log(answer);
