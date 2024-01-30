// 2×n 타일링 2
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const dp = Array(1001).fill(0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= N; i++) {
  // 점화식   dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007 을 이용
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

// 결과 출력
console.log(dp[N]);
