// 랜선 자르기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, k] = input
  .shift()
  .split(' ')
  .map((a) => +a);

const lines = input.map((a) => +a).sort();

// 최댓값, 최솟값
let max = Math.max(...lines);
let min = 1;

// 이분 탐색
while (min <= max) {
  let mid = parseInt((max + min) / 2);

  // mid를 기준으로 몇 개의 조각으로 나눌 수 있는지 계산
  let countPieces = lines.map((line) => parseInt(line / mid)).reduce((a, b) => a + b, 0);

  // 조각의 수가 k보다 크거나 같은 경우
  if (countPieces >= k) {
    min = mid + 1; // 오른쪽 부분 배열 탐색
  } else {
    // 조각의 수가 k보다 작은 경우
    max = mid - 1; // 왼쪽 부분 배열 탐색
  }
}

// 결과 출력
console.log(max);
