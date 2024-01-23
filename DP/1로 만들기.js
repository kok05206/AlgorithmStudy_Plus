// 1로 만들기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = Number(input);
let answer = Array.from(Array(N + 1), () => 0);

// 초기값
answer[2] = 1;
answer[3] = 1;

// 4부터 N까지의 값을 반복
for (let i = 4; i <= N; i++) {
  // 현재 값에서 1을 빼는 경우
  answer[i] = answer[i - 1] + 1;

  // 현재 값이 3으로 나누어 떨어지는 경우
  if (i % 3 === 0) {
    answer[i] = Math.min(answer[i], answer[i / 3] + 1);
  }

  // 현재 값이 2로 나누어 떨어지는 경우
  if (i % 2 === 0) {
    answer[i] = Math.min(answer[i], answer[i / 2] + 1);
  }
}

// 결과 출력
console.log(answer[N]);
