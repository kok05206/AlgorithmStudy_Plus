const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 입력값에서 카드의 개수
const N = parseInt(input[0]);
// 카드 팩의 가격들을 담을 배열
const prices = input[1].split(' ').map(Number);

// dp[i]는 i개의 카드를 얻기 위해 지불해야 하는 최대 가격
const dp = new Array(N + 1).fill(0);

// DP를 사용하여 각각의 카드 개수에 대한 최대 가격을 계산
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    // i개의 카드를 얻기 위해 j개의 카드가 들어있는 카드 팩을 구매할 때의 가격은
    // dp[i-j]에 prices[j-1]을 더한 값
    // 따라서 dp[i]에는 이전에 계산한 dp[i-j]와 현재 카드 팩의 가격(prices[j-1])을 더한 값 중 최대값이 저장됨
    dp[i] = Math.max(dp[i], dp[i - j] + prices[j - 1]);
  }
}

// N개의 카드를 얻을 때의 최대 가격을 출력
console.log(dp[N]);
