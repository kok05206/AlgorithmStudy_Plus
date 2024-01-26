// 정수 삼각형
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const triangle = [];

for (let i = 1; i < input.length; i++) {
  triangle.push(input[i].split(' ').map(Number));
}

function solution(triangle) {
  // dp 배열을 triangle 배열의 복사
  const dp = triangle.slice();

  // 마지막 행에서부터 역순으로 진행하면서 각 위치의 최대 경로 합을 계산
  for (let i = dp.length - 2; i >= 0; i--) {
    // i는 현재 행(마지막 행에서부터 역순으로 진행)
    for (let j = 0; j < dp[i].length; j++) {
      // j는 현재 행의 열(해당 행의 열 개수만큼 반복)
      dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
      // 현재 위치의 값에, 아래 행의 두 값 중 더 큰 값을 더해준다
    }
  }
  // 최종적으로 dp 배열의 맨 꼭대기 위치에 저장된 값이 최대 경로이므로 리턴
  return dp[0][0];
}

// 결과 출력
console.log(solution(triangle));
