// 동전
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const t = +input.shift();

for (let i = 0; i < t; i++) {
  const num = +input.shift(); // 동전 종류의 개수
  const coins = input.shift().split(' ').map(Number); // 동전 종류
  const won = +input.shift(); // 목표 금액

  // dp 배열
  const dp = Array.from({ length: won + 1 }, () => 0); // dp 배열 초기화
  dp[0] = 1; // 0원을 만들 수 있는 경우의 수는 1

  // 동전을 순회하며 dp 갱신
  for (let j = 0; j < num; j++) {
    for (let k = coins[j]; k <= won; k++) {
      dp[k] += dp[k - coins[j]]; // 동전의 가치를 뺀 금액을 만들 수 있는 경우의 수를 더해줌
    }
  }

  // 결과 출력
  console.log(dp[won]);
}
