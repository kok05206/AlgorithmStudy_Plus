// 보물
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0]; // N 입력.

let A = input[1].split(' ').map((e) => parseInt(e)); // A 배열 입력.

let B = input[2].split(' ').map((e) => parseInt(e)); // B 배열 입력.

// A, B 정렬.
A.sort((a, b) => a - b); // 오름차순
B.sort((a, b) => b - a); // 내림차순

// 결과를 담을 변수 선언.
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += A[i] * B[i];
}

// 결과 출력
console.log(sum);
