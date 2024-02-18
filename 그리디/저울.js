// 저울
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let answer = 1;
// 만들 수 없는 최소 무게를 1로 초기화함

for (let i = 0; i < N; i++) {
  // 무게를 작은 순서대로 순회
  if (answer < arr[i]) {
    // 현재 최소 무게보다 더 큰 무게가 나오면
    break;
    // 반복문을 종료
  }
  answer += arr[i];
  // 최소 무게 갱신
}

// 결과 출력
console.log(answer);
