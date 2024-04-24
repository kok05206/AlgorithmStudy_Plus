const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function canWin(n) {
  // 만약 돌의 개수가 홀수면 true를 반환
  // 짝수면 false를 반환
  return n % 2 !== 0;
}

// 입력값을 정수로 변환하여 돌의 개수로 사용
const stones = parseInt(input);

// 결과 출력
console.log(canWin(stones) ? 'SK' : 'CY');
