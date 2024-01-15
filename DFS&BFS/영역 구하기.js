// 영역 구하기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N, K] = input[0].split(' ').map(Number);
// 도면
const paper = [...Array(M)].map(() => Array(N).fill(false));

// 좌표 입력
for (let i = 1; i <= K; i++) {
  const [x1, y1, x2, y2] = input[i].split(' ').map(Number);

  for (let y = M - y2; y < M - y1; y++) {
    for (let x = x1; x < x2; x++) {
      // 너비 조정
      paper[y][x] = true;
    }
  }
}

// 상하좌우
const dir = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

const dfs = (start) => {
  const stack = [start];
  // 영역의 개수
  let count = 0;

  while (stack.length) {
    const [x, y] = stack.pop();
    count++;

    // 사분면 확인
    for (let i = 0; i < 4; i++) {
      const nx = x + dir[i][0];
      const ny = y + dir[i][1];

      // 새로운 좌표가 아직 방문하지 않은 영역이라면
      //
      if (nx >= 0 && nx < M && ny >= 0 && ny < N && !paper[nx][ny]) {
        paper[nx][ny] = true;
        stack.push([nx, ny]);
      }
    }
  }
  // 탐색한 영역의 개수 리턴
  return count;
};

// 영역의 개수
const area = [];

// 방문하지 않은 모든 영역 확인
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!paper[i][j]) {
      paper[i][j] = true;
      area.push(dfs([i, j, 0]));
    }
  }
}

// 결과 출력
console.log(area.length);
console.log(area.sort((a, b) => a - b).join(' '));
