// 적록색약
const fs = require('fs');
const inputFilePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(inputFilePath).toString().trim().split('\n');
const n = parseInt(input[0]);
const board = input.slice(1, n + 1).map((row) => row.split(''));
const checked = Array.from(Array(n), () => Array(n).fill(0)); // 정상인 경우
const checked2 = Array.from(Array(n), () => Array(n).fill(0)); // 적록색약인 경우

function bfs(x, y, color, checked) {
  const queue = [];
  queue.push([x, y]); // 시작점 큐에 추가
  const dx = [-1, 1, 0, 0]; // 상하좌우
  const dy = [0, 0, -1, 1];
  checked[x][y] = 1; // 시작점 방문 처리

  while (queue.length > 0) {
    // 큐가 비어있을 때까지 반복
    [x, y] = queue.shift(); // 큐에서 좌표를 꺼내고
    for (let i = 0; i < 4; i++) {
      // 상하좌우 확인
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      if (
        0 <= nx &&
        nx < n &&
        0 <= ny &&
        ny < n &&
        board[nx][ny] === color &&
        checked[nx][ny] === 0
      ) {
        // 인접한 위치가 범위 내에 있고, 같은 색이며 아직 방문하지 않았을 경우
        checked[nx][ny] = 1; // 방문 처리
        queue.push([nx, ny]); // 큐에 좌표 추가
      }
    }
  }
}

// 정상인인 경우
let cnt = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (checked[i][j] === 0) {
      // 아직 방문하지 않은 좌표인 경우
      bfs(i, j, board[i][j], checked); // bfs를 호출, 연결된 구역 탐색
      cnt += 1; // 구역 수를 증가
    }
  }
}

// 적록색약인 경우
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 'G') {
      // 색이 G인 경우
      board[i][j] = 'R'; // G를 R로 변경
    }
  }
}
let cntt = 0; // 적록색약인 경우의 구역 수를 세는 변수입니다.
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (checked2[i][j] === 0) {
      // 아직 방문하지 않은 좌표인 경우
      bfs(i, j, board[i][j], checked2); // bfs를 호출, 연결된 구역 탐색
      cntt += 1; // 구역 수를 증가
    }
  }
}

// 결과 출력
console.log(cnt, cntt);
