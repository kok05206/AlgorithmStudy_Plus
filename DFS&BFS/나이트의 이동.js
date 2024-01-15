// 나이트의 이동
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 이동 방향
const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
const dy = [1, -1, 2, -2, 2, -2, 1, -1];

// 테케
const n = parseInt(input[0]);

for (let i = 0; i < n; i++) {
  const l = parseInt(input[i * 3 + 1]); // 체스판 크기
  const board = new Array(l).fill(0).map(() => new Array(l).fill(0)); // 체스판 초기화
  const queue = []; // 큐 초기화
  const [x, y] = input[i * 3 + 2].split(' ').map(Number); // 나이트의 시작 위치
  const [w, z] = input[i * 3 + 3].split(' ').map(Number); // 나이트의 목표 위치
  queue.push([x, y]); // 시작 위치 큐에 추가

  while (queue.length > 0) {
    const [x, y] = queue.shift(); // 큐에서 좌표를 꺼냄

    // 목표 위치일 경우 종료
    if (x === w && y === z) {
      break;
    }

    for (let j = 0; j < 8; j++) {
      const nx = dx[j] + x; // 다음 x 좌표
      const ny = dy[j] + y; // 다음 y 좌표

      // 예외
      if (nx < 0 || ny < 0 || nx >= l || ny >= l) {
        continue;
      }

      // 방문하지 않은 위치인 경우
      if (board[nx][ny] === 0) {
        board[nx][ny] = board[x][y] + 1; // 이동 거리 갱신
        queue.push([nx, ny]); // 다음 위치 큐에 추가
      }
    }
  }

  // 결과 출력
  console.log(board[w][z]);
}
