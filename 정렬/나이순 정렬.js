// 나이순 정렬
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
[N, ...arr] = input;

function solution(arr) {
  // 나이비교 후 정렬
  arr = arr.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]);
  return arr;
}
// 결과 출력
console.log(solution(arr).join('\n'));
