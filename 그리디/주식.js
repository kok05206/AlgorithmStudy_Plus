// 주식
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const T = parseInt(input[0]); // 테스트 케이스의 수

for (let t = 0; t < T; t++) {
  const N = parseInt(input[t * 2 + 1]); // 주식 가격 개수
  const prices = input[t * 2 + 2].split(' ').map(Number); // 주식 가격 배열

  let maxPrice = 0; // 최고 가격
  let profit = 0; // 이익

  // 뒤에서부터 순회하며 최대가격 갱신, 이익을 더해줌
  for (let i = N - 1; i >= 0; i--) {
    if (prices[i] > maxPrice) {
      maxPrice = prices[i]; // 최고 가격 갱신
    } else {
      profit += maxPrice - prices[i]; // 이익 누적
    }
  }

  // 결과 출력
  console.log(profit);
}
