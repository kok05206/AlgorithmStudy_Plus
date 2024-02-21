// 가장 긴 증가하는 부분 수열
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const dp = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    // 현재 숫자가 이전 숫자보다 큰 경우
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1); // 수열의 길이 갱신
    }
  }
}

// 결과 출력
console.log(Math.max(...dp));
