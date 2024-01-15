// 숫자카드
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = +input[0];
const cards = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const targets = input[3].split(' ').map(Number);
const result = [];

// 이진 탐색
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return true; // 탐색 성공
    } else if (arr[mid] < target) {
      start = mid + 1; // 오른쪽 부분 배열 탐색
    } else {
      end = mid - 1; // 왼쪽 부분 배열 탐색:
    }
  }

  return false; // 탐색 실패
}
// 탐색 결과에 따라 1 또는 0을 결과에 추가
for (const target of targets) {
  const found = binarySearch(cards, target);
  result.push(found ? 1 : 0);
}

// 결과 출력
console.log(result.join(' '));
