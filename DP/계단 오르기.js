// 계단 오르기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
const N = input[0]; // 계단 개수
const dp = new Array(N + 1);

// 첫 번째 계단은 그대로 저장
dp[1] = input[1];
// 두 번째 계단은 첫 번째 계단 + 두 번째 계단 저장
dp[2] = dp[1] + input[2];
// 세 번째 계단은 첫 번째와 두 번째 계단 중 큰 값 + 세 번째 계단 저장
dp[3] = Math.max(input[1], input[2]) + input[3];

// 4번째 계단부터 N번째 계단까지 반복
for (let i = 4; i <= N; i++) {
  dp[i] = Math.max(dp[i - 3] + input[i - 1] + input[i], dp[i - 2] + input[i]);
  // 현재 계단 3번째 전 계단까지의 최댓값에 2번째 전 계단과 현재 계단을 더한 값과
  // 현재 계단에서 2번째 전 계단까지의 최댓값에 현재 계단을 더한 값 중 큰 값을 저장
}

// 결과 출력
console.log(dp[N]);
