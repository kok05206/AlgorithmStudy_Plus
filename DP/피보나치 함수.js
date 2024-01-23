// 피보나치 함수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const len = input.shift();

for (let i = 0; i < len; i++) {
  const n = input[i];
  // 초기 피보나치 수열 값
  const fibonacci = [
    [1, 0],
    [0, 1],
  ];

  // 피보나치 계산
  for (let j = 2; j <= n; j++) {
    fibonacci[j] = [
      fibonacci[j - 1][0] + fibonacci[j - 2][0], // 이전 두 수의 첫 번째 요소를 더함
      fibonacci[j - 1][1] + fibonacci[j - 2][1], // 이전 두 수의 두 번째 요소를 더함
    ];
  }

  // 결과 출력
  console.log(fibonacci[n].join(' '));
}
