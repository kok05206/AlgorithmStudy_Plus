// 친구
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = parseInt(input[0]);
const graph = input.slice(1).map((line) => line.trim().split(''));

// 친구 여부
const f = Array.from(Array(n), () => Array(n).fill(0));

// 친구 여부 확인
// k를 거쳐서 i와 j가 친구인지 확인
for (let k = 0; k < n; k++) {
  // i를 시작 정점으로 선택
  for (let i = 0; i < n; i++) {
    // j를 도착 정점으로 선택
    for (let j = 0; j < n; j++) {
      if (i === j) continue; // 출발 정점과 도착 정점이 같으면 스킵
      if (graph[i][j] === 'Y' || (graph[i][k] === 'Y' && graph[k][j] === 'Y')) {
        // i와 j가 친구거나 i와 k, k와 j가 친구일 때
        f[i][j] = 1; // 친구로 표시
      }
    }
  }
}

let result = 0; // 결과값

// 각 정점별로 계산하여 최댓값 갱신
for (let row of f) {
  result = Math.max(
    result,
    row.reduce((acc, curr) => acc + curr, 0)
  );
}

// 결과 출력
console.log(result);
