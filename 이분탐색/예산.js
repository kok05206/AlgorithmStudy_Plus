// 예산
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, request, total] = [+input[0], input[1].split(' ').map(Number), +input[2]];

// 정렬
request.sort((a, b) => a - b);

let start = 0;
let end = request[request.length - 1];
let answer = Number.MIN_SAFE_INTEGER; // 최댓값을 저장할 변수입니다.

// 이분 탐색
while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  let possible = 0; // 배정 가능한 예산
  for (let x of request) {
    if (x > mid) possible += mid; // 요청한 예산이 중간 값보다 큰 경우 중간 값으로 처리
    else possible += x; // 요청한 예산이 중간 값보다 작거나 같은 경우 해당 예산을 그대로 사용
  }

  if (total >= possible) {
    // 예산 배정이 가능한 경우
    if (mid > answer) answer = mid; // 현재 중간 값이 answer보다 큰 경우 answer 갱신
    start = mid + 1; // 오른쪽 부분 배열 탐색
  } else {
    end = mid - 1; // 왼쪽 부분 배열 탐색
  }
}

// 결과 출력
console.log(answer);
