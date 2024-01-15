// ATM
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 짧은 시간부터 긴 시간으로 정렬해야함
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

// 최종 시간
let time = 0;
// 누적 시간
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  time += sum + arr[i]; // 현재 사람이 기다린 시간 + 내가 걸리는 시간
  sum += arr[i]; // 누적시간 계산
}

// 결과 출력
console.log(time);
