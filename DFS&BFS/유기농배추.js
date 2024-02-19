// 유기농 배추
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 테스트케이스
const T = parseInt(input[0]);

// 테스트 케이스 만큼 반복
let index = 1;
for (let t = 0; t < T; t++) {
  const [M, N, K] = input[index++].split(' ').map(Number);
  const board = [];
  const queue = [];

  // 새로운 케이스들 마다 밭의 크기 및 배추, 보드 초기화
  for (let i = 0; i < M; i++) {
    board.push(Array(N).fill(0));
  }

  // 배추의 개수 K만큼 배추심기
  for (let i = 0; i < K; i++) {
    const [x, y] = input[index++].split(' ').map(Number);
    // 땅에 심어진 배추들은 1
    board[x][y] = 1;
  }

  // 지렁이 마릿수
  let worm = 0;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      queue.push([i, j]);
      while (queue.length > 0) {
        const [x, y] = queue.shift();
        // 배추가 심어져 있는 경우
        if (board[x][y] === 1) {
          // 체크
          queue.push([x, y]);
          // 카운트 증가
          worm += 1;
          // queue가 빌 때까지 반복
          while (queue.length > 0) {
            const [x, y] = queue.shift();
            // 범위를 벗어난 경우
            if (x < 0 || y < 0 || x >= M || y >= N) {
              continue;
            }
            // 탐색 중 배추를 찾은 경우
            if (board[x][y] === 1) {
              // 0으로 바꿔줘야 함
              board[x][y] = 0;
              // 배추가 있다면 그 배추의 상하좌우 확인
              queue.push([x + 1, y]);
              queue.push([x - 1, y]);
              queue.push([x, y + 1]);
              queue.push([x, y - 1]);
            }
          }
        }
      }
    }
  }

  // 결과 출력
  console.log(worm);
}
