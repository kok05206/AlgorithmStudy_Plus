// 수 이어 쓰기1
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
let input = fs.readFileSync(filePath).toString().trim();
const n = +input;

const solution = (n) => {
  let sum = 0;

  // 자릿수 계산을 위해서 i*10씩 증가
  for (let i = 1; i <= n; i *= 10) {
    sum += n - i + 1;
  }
  return sum;
};

// 결과 출력
console.log(solution(n));
