// 과자 나눠주기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [m, n] = input[0].split(' ').map(Number);
const L = input[1].split(' ').map(Number);

let start = 1; // 과자 길이
let end = 1e9; // 최대 길이
let answer = 0; // 결과

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let target = 0;

  for (let i = 0; i < n; i++) {
    //개수 계산
    target += Math.floor(L[i] / mid);
  }

  if (target >= m) {
    // 만들 수 있는 과자 개수가 m보다 크거나 같으면
    answer = Math.max(answer, mid); // 현재 길이를 정답으로 갱신
    start = mid + 1; // 오른쪽 부분 배열 탐색
  } else {
    end = mid - 1; // 왼쪽 부분 배열 탐색
  }
}

// 결과 출력
console.log(answer);
