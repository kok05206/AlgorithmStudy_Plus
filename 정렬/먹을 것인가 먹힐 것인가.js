// 먹을 것인가 먹힐 것인가
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const T = input.shift();

for (let t = 0; t < T; t++) {
  const [N, M] = input.shift().split(' ').map(Number);
  const A = input
    .shift()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  const B = input
    .shift()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  let count = 0; // B에서 현재까지 짝을 이룬 인덱스 개수
  let result = 0; // 짝을 이룬 쌍의 개수

  for (let i = 0; i < N; i++) {
    // A의 각 인덱스에 대해 B에서 짝을 이룰 수 있는 인덱스 개수를 찾음
    // B는 이미 정렬되어 있으므로, 현재 요소보다 작거나 같은 값의 개수를 세면 됨
    for (; count < M && A[i] > B[count]; count++) {
      // B에서 현재 인덱스 보다 작거나 같은 값을 찾을 때까지 count 증가
    }
    result += count; // 짝을 이룬 쌍의 개수 갱신
  }
  // 결과 출력
  console.log(result);
}
