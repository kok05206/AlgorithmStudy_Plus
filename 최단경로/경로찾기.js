// 경로 찾기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = +input.shift();
let board = [];

for (const row of input) {
  board.push(row.split(' ').map(Number));
}

// 중간 지점
for (let k = 0; k < N; k++) {
  // 출발 지점
  for (let i = 0; i < N; i++) {
    // 도착 지점
    for (let j = 0; j < N; j++) {
      // 중간지점을 거쳐가는 경우
      if (board[i][k] && board[k][j]) {
        board[i][j] = 1;
      }
    }
  }
}

// 결과 출력
for (let i = 0; i < N; i++) {
  console.log(board[i].join(' '));
}
